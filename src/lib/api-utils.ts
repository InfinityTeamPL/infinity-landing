/** Escape HTML special characters to prevent XSS in email templates */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Górne limity długości pól przyjmowanych z formularzy.
 * Bez nich da się wepchnąć do treści maila dowolnie duży ładunek.
 */
export const LIMITY = {
  email: 254, // maksimum z RFC 5321
  imie: 100,
  telefon: 32,
  wiadomosc: 4000,
  zrodlo: 60,
} as const;

/**
 * Pułapka na proste boty. Pole jest ukryte przed człowiekiem, więc jego
 * wypełnienie oznacza automat. Zwracamy wtedy sukces, a nie błąd: bot nie
 * dostaje sygnału, że został rozpoznany, i nie próbuje obejść zabezpieczenia.
 */
export function wyglądaNaBota(payload: Record<string, unknown>): boolean {
  const pole = payload.firma_www;
  return typeof pole === 'string' && pole.trim().length > 0;
}

/**
 * Prosty licznik żądań na adres IP.
 *
 * OGRANICZENIE, O KTÓRYM TRZEBA WIEDZIEĆ: stan siedzi w pamięci procesu,
 * a na Vercelu każda instancja funkcji ma własną kopię i żyje krótko.
 * Przy równoległych żądaniach realny limit jest więc wielokrotnie wyższy
 * od zadeklarowanego. To zapora na przypadkowe zapętlenie formularza,
 * nie na celowy atak. Twardy limit wymaga współdzielonego stanu
 * (Vercel KV, Upstash) albo reguły rate limitingu w zaporze Vercela.
 */
const hits = new Map<string, { count: number; resetAt: number }>();
let lastCleanup = Date.now();

export function rateLimit(ip: string, maxRequests = 10, windowMs = 60_000): boolean {
  const now = Date.now();

  // Cleanup expired entries every 5 minutes
  if (now - lastCleanup > 300_000) {
    hits.forEach((entry, key) => {
      if (now > entry.resetAt) hits.delete(key);
    });
    lastCleanup = now;
  }

  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}
