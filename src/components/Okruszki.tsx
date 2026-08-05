/**
 * BreadcrumbList dla stron spoza szablonów SeoLanding i BlogArticle.
 *
 * Tamte generują okruszki same z treści, ale strony pisane ręcznie
 * (/agents, /blog, /kalkulator, dokumenty prawne) nie miały ich wcale,
 * przez co w wynikach wyszukiwania pokazywał się goły adres zamiast
 * ścieżki. Kształt danych jest celowo taki sam jak w SeoLanding.
 */

const BASE = 'https://www.infinityteam.io';

export default function Okruszki({ nazwa, sciezka }: { nazwa: string; sciezka: string }) {
  const dane = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: BASE },
      { '@type': 'ListItem', position: 2, name: nazwa, item: `${BASE}${sciezka}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}
