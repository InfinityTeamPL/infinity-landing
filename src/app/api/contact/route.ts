import { NextResponse } from 'next/server';
import { escapeHtml, rateLimit, wyglądaNaBota, LIMITY } from '@/lib/api-utils';

const EMAIL_RE = /^\S+@\S+\.\S+$/;

async function sendEmail(apiKey: string, payload: object): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('[contact] Resend error', res.status, detail);
    return { ok: false, error: detail };
  }

  return { ok: true };
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!rateLimit(ip, 5, 60_000)) {
      return NextResponse.json({ error: 'Za dużo prób z tego adresu. Odczekaj minutę i wyślij jeszcze raz.' }, { status: 429 });
    }

    const payload = await request.json();
    const { name, email, phone, message, zgoda } = payload;

    // Bot dostaje odpowiedź sukcesu, żeby nie wiedział, że go rozpoznaliśmy.
    if (wyglądaNaBota(payload)) {
      return NextResponse.json({ ok: true, delivered: true });
    }

    if (typeof email !== 'string' || !EMAIL_RE.test(email.trim()) || email.length > LIMITY.email) {
      return NextResponse.json({ error: 'Ten adres e-mail nie wygląda poprawnie. Sprawdź go, bo na niego odpiszemy.' }, { status: 400 });
    }
    if (typeof message !== 'string' || message.trim().length < 3) {
      return NextResponse.json({ error: 'Napisz choć jedno zdanie, inaczej nie będziemy wiedzieć, o co chodzi.' }, { status: 400 });
    }
    if (message.length > LIMITY.wiadomosc) {
      return NextResponse.json(
        { error: `Wiadomość jest za długa. Zmieść się w ${LIMITY.wiadomosc} znakach, resztę dopowiesz na rozmowie.` },
        { status: 400 },
      );
    }
    if (typeof name === 'string' && name.length > LIMITY.imie) {
      return NextResponse.json({ error: 'Imię i nazwisko są za długie.' }, { status: 400 });
    }
    if (typeof phone === 'string' && phone.length > LIMITY.telefon) {
      return NextResponse.json({ error: 'Numer telefonu jest za długi.' }, { status: 400 });
    }
    // Formularz blokuje wysyłkę bez zaznaczonej zgody, ale to sprawdzenie
    // po stronie klienta da się obejść. Bez zgody nie mamy podstawy do
    // przetwarzania danych kontaktowych, więc odrzucamy takie zgłoszenie.
    if (zgoda !== true) {
      return NextResponse.json(
        { error: 'Bez zgody na kontakt nie mamy podstawy, żeby do Ciebie napisać. Zaznacz pole i wyślij ponownie.' },
        { status: 400 },
      );
    }

    const cleanEmail = email.trim();
    const cleanName = typeof name === 'string' ? name.trim() : '';
    const cleanPhone = typeof phone === 'string' ? phone.trim() : '';
    const cleanMessage = message.trim();

    const safeEmail = escapeHtml(cleanEmail);
    const safeName = escapeHtml(cleanName);
    const safePhone = escapeHtml(cleanPhone);
    const safeMessage = escapeHtml(cleanMessage);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.WAITLIST_TO || 'contact@infinityteam.io';
    const from = process.env.WAITLIST_FROM || 'Infinity Tech <waitlist@infinityteam.io>';

    if (!apiKey) {
      // Bez klucza nie mamy jak dostarczyć wiadomości. Wcześniej zwracaliśmy
      // tu 200 z ok:true, więc formularz pokazywał "Wiadomość wysłana!",
      // a zgłoszenie przepadało bez śladu — żadne z czterech miejsc
      // wywołujących nie czytało flagi delivered, tylko status HTTP.
      // Lepiej powiedzieć wprost, że się nie udało, i dać adres zapasowy.
      console.error('[contact] RESEND_API_KEY missing — zgłoszenie NIE zostało dostarczone');
      return NextResponse.json(
        { error: 'Formularz nam w tej chwili nie działa. Napisz wprost na contact@infinityteam.io albo zadzwoń: +48 735 170 957.' },
        { status: 503 },
      );
    }

    const notificationHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; padding: 16px;">
        <h2 style="margin: 0 0 12px; color: #0A1628;">Nowa wiadomość z formularza kontaktowego</h2>
        ${safeName ? `<p style="margin: 0 0 8px; color: #334155;"><strong>Imię i nazwisko:</strong> ${safeName}</p>` : ''}
        <p style="margin: 0 0 8px; color: #334155;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        ${safePhone ? `<p style="margin: 0 0 8px; color: #334155;"><strong>Telefon:</strong> ${safePhone}</p>` : ''}
        <p style="margin: 0 0 8px; color: #334155;"><strong>Wiadomość:</strong></p>
        <p style="margin: 0 0 16px; color: #334155; white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 8px;">${safeMessage}</p>
        <p style="margin: 12px 0 0; color: #334155;"><strong>Zgoda na kontakt:</strong> udzielona ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}</p>
        <p style="margin: 16px 0 0; color: #64748b; font-size: 12px;">Zgłoszenie wysłane z landing page infinityteam.io</p>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 520px; margin: 0 auto; background: #0A1628; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2E4AAD, #4F6AE8); padding: 28px 32px 24px; display: flex; align-items: center; gap: 16px;">
          <img src="https://www.infinityteam.io/infinity-logo.png" alt="Infinity Tech" width="48" height="48" style="display: block; border-radius: 10px; flex-shrink: 0;" />
          <div>
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">Infinity Tech</h1>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;">Potwierdzenie wiadomości</p>
          </div>
        </div>
        <div style="padding: 32px;">
          <h2 style="margin: 0 0 12px; color: #ffffff; font-size: 20px;">Mamy Twoją wiadomość${safeName ? ', ' + escapeHtml(cleanName.split(' ')[0]) : ''}</h2>
          <p style="margin: 0 0 16px; color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.6;">
            Odpisujemy zwykle w ciągu jednego dnia roboczego. Jeśli piszesz w piątek wieczorem, realnie odezwiemy się w poniedziałek.
          </p>
          <!--
            CELOWO NIE ODSYŁAMY TU TREŚCI WIADOMOŚCI.
            Adres odbiorcy pochodzi wprost z żądania, więc gdyby ten mail
            zawierał dowolny tekst nadawcy, formularz stawałby się narzędziem
            do wysyłania czegokolwiek na czyjkolwiek adres z naszej domeny,
            w naszej szacie graficznej. Treść jest wprawdzie escapowana, więc
            nie da się wstrzyknąć kodu, ale sam tekst wystarczy do podszycia
            się pod nas. Najgorszy scenariusz to wpisanie naszej domeny na
            czarne listy, co zabiłoby całą pocztę transakcyjną.
            Pełna treść trafia do wiadomości wewnętrznej, na stały adres.
          -->
          <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">
              Treść zgłoszenia mamy zapisaną, nie musisz jej powtarzać. Chcesz coś dorzucić, zanim odpiszemy? Napisz na contact@infinityteam.io, dopniemy to do sprawy.
            </p>
          </div>
          <p style="margin: 0 0 16px; color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.6;">
            Jeśli piszesz w sprawie wdrożenia, pierwsza rozmowa nic nie kosztuje. Pytamy na niej głównie o dwie rzeczy: który proces zjada u Was najwięcej godzin i gdzie leżą dane, z których agent miałby korzystać. Jeden konkretny przykład sprawy pomaga nam bardziej niż opis całej firmy.
          </p>
          <p style="margin: 0 0 24px; color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.6;">
            A jeśli nic do nas nie wysyłałeś i ten mail trafił do Ciebie przez pomyłkę, po prostu go zignoruj. Z formularza kontaktowego nie zapisujemy nikogo na listę mailingową.
          </p>
          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 8px;">
            <p style="margin: 0; color: rgba(255,255,255,0.4); font-size: 12px;">
              Infinity Tech · <a href="https://www.infinityteam.io" style="color: #7B9BDB; text-decoration: none;">infinityteam.io</a> · <a href="mailto:contact@infinityteam.io" style="color: #7B9BDB; text-decoration: none;">contact@infinityteam.io</a>
            </p>
          </div>
        </div>
      </div>
    `;

    const [notification, confirmation] = await Promise.all([
      sendEmail(apiKey, {
        from,
        to: [to],
        reply_to: cleanEmail,
        subject: `Nowa wiadomość od ${cleanName || cleanEmail}`,
        html: notificationHtml,
      }),
      sendEmail(apiKey, {
        from,
        to: [cleanEmail],
        subject: 'Mamy Twoją wiadomość (Infinity Tech)',
        html: confirmationHtml,
      }),
    ]);

    if (!notification.ok) {
      return NextResponse.json({ error: 'Nie udało się wysłać wiadomości. Spróbuj jeszcze raz, a jeśli znowu nie przejdzie, napisz na contact@infinityteam.io.' }, { status: 502 });
    }

    if (!confirmation.ok) {
      console.warn('[contact] confirmation email failed');
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] unexpected error', err);
    return NextResponse.json({ error: 'Coś się u nas wysypało. Spróbuj za chwilę albo napisz na contact@infinityteam.io.' }, { status: 500 });
  }
}
