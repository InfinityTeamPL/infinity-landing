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
    console.error('[waitlist] Resend error', res.status, detail);
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
    const { email, source, zgoda } = payload;

    // Bot dostaje odpowiedź sukcesu, żeby nie wiedział, że go rozpoznaliśmy.
    if (wyglądaNaBota(payload)) {
      return NextResponse.json({ ok: true });
    }

    if (
      typeof email !== 'string' ||
      !EMAIL_RE.test(email.trim()) ||
      email.length > LIMITY.email
    ) {
      return NextResponse.json(
        { error: 'Ten adres e-mail nie wygląda poprawnie. Sprawdź go, bo na niego napiszemy.' },
        { status: 400 }
      );
    }
    if (typeof source === 'string' && source.length > LIMITY.zrodlo) {
      return NextResponse.json({ error: 'Nieprawidłowe źródło zapisu.' }, { status: 400 });
    }

    const cleanEmail = email.trim();
    const signupSource = typeof source === 'string' && source ? source : 'Desktop App waitlist';

    const safeEmail = escapeHtml(cleanEmail);
    const safeSource = escapeHtml(signupSource);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.WAITLIST_TO || 'contact@infinityteam.io';
    const from = process.env.WAITLIST_FROM || 'Infinity Tech <waitlist@infinityteam.io>';

    if (!apiKey) {
      // Patrz komentarz w api/contact: zwracanie 200 przy braku klucza
      // dawało fałszywe potwierdzenie zapisu, a adres nigdzie nie trafiał.
      console.error('[waitlist] RESEND_API_KEY missing — zapis NIE został dostarczony');
      return NextResponse.json(
        { error: 'Zapis nam w tej chwili nie działa. Napisz na contact@infinityteam.io, dopiszemy Cię ręcznie.' },
        { status: 503 },
      );
    }

    const notificationHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; padding: 16px;">
        <h2 style="margin: 0 0 12px; color: #0A1628;">Nowy zapis na waitlist</h2>
        <p style="margin: 0 0 8px; color: #334155;"><strong>Źródło:</strong> ${safeSource}</p>
        <p style="margin: 0 0 8px; color: #334155;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p style="margin: 0 0 8px; color: #334155;"><strong>Zgoda:</strong> ${
          zgoda === true
            ? `udzielona ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}`
            : zgoda === false
              ? 'NIE udzielona, mimo obecności pola zgody. Zweryfikuj zgłoszenie przed kontaktem.'
              : 'formularz nie zawierał pola zgody (waitlista w kartach usług), zapis na podstawie samego zgłoszenia adresu'
        }</p>
        <p style="margin: 16px 0 0; color: #64748b; font-size: 12px;">Zgłoszenie wysłane z landing page infinityteam.io</p>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 520px; margin: 0 auto; background: #0A1628; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2E4AAD, #4F6AE8); padding: 28px 32px 24px; display: flex; align-items: center; gap: 16px;">
          <img src="https://www.infinityteam.io/infinity-logo.png" alt="Infinity Tech" width="48" height="48" style="display: block; border-radius: 10px; flex-shrink: 0;" />
          <div>
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">Infinity Tech</h1>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;">Waitlista Desktop App</p>
          </div>
        </div>
        <div style="padding: 32px;">
          <h2 style="margin: 0 0 12px; color: #ffffff; font-size: 20px;">Jesteś na liście</h2>
          <p style="margin: 0 0 16px; color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.6;">
            Zapisaliśmy Twój adres. Kiedy aplikacja będzie na tyle gotowa, żeby dało się jej używać na co dzień, napiszemy właśnie tutaj.
          </p>
          <p style="margin: 0 0 16px; color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.6;">
            Uczciwie: daty premiery nie mamy i nie chcemy jej zmyślać. Nie będziemy też zasypywać Cię mailami po drodze. Jeden mail, wtedy gdy będzie co pokazać.
          </p>
          <p style="margin: 0 0 16px; color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.6;">
            Nie chcesz czekać? Część rzeczy działa już dziś. Agentów głosowych i automatyzacje wdrażamy normalnie, na projekt, a pierwsza rozmowa nic nie kosztuje. Wystarczy napisać na contact@infinityteam.io.
          </p>
          <p style="margin: 0 0 24px; color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.6;">
            Chcesz zejść z listy? Napisz na contact@infinityteam.io, wystarczy jedno słowo, usuniemy adres.
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
        subject: `Nowy zapis na waitlist: ${signupSource}`,
        html: notificationHtml,
      }),
      sendEmail(apiKey, {
        from,
        to: [cleanEmail],
        subject: 'Jesteś na liście (Infinity Tech Desktop App)',
        html: confirmationHtml,
      }),
    ]);

    if (!notification.ok) {
      return NextResponse.json(
        { error: 'Nie udało się zapisać zgłoszenia. Spróbuj jeszcze raz albo napisz na contact@infinityteam.io.' },
        { status: 502 }
      );
    }

    if (!confirmation.ok) {
      console.warn('[waitlist] confirmation email failed');
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[waitlist] unexpected error', err);
    return NextResponse.json(
      { error: 'Coś się u nas wysypało. Spróbuj za chwilę albo napisz na contact@infinityteam.io.' },
      { status: 500 }
    );
  }
}
