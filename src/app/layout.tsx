import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import ThemeToggle from "@/components/ThemeToggle";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infinityteam.io'),
  title: {
    default: "Agenci AI dla firm: voicebot, chatbot, automatyzacja",
    // Bez sufiksu marki. "| Infinity Tech" to 16 znaków z ~60, które Google
    // pokazuje — przy polskich frazach ucinało to ogon tytułu i markę naraz.
    // Nazwę serwisu Google bierze z WebSite JSON-LD niżej w tym pliku.
    template: "%s",
  },
  description: "Agenci AI dla firm: voiceboty, chatboty 24/7 i automatyzacja procesów. Wdrożenia szyte na miarę, dane w Polsce, RODO. Pierwsza konsultacja bezpłatna.",
  keywords: ["AI", "sztuczna inteligencja", "agenci AI", "agenci głosowi", "voice AI", "automatyzacja", "asystent głosowy", "biznes", "obsługa klienta AI", "HR", "kadry i płace", "marketing", "sprzedaż"],
  authors: [{ name: "Infinity Tech" }],
  creator: "Infinity Tech",
  publisher: "Infinity Tech",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.infinityteam.io",
    siteName: "Infinity Tech",
    title: "Infinity Tech — Agenci AI dla biznesu",
    description: "Budujemy agentów AI, głosowych i tekstowych, oraz automatyzacje procesów dla firm. Voice AI, obsługa klienta 24/7, kadry, sprzedaż i wdrożenia szyte na miarę. Dane w Polsce, zgodność z RODO.",
    images: [
      {
        url: "https://www.infinityteam.io/og.png",
        width: 1200,
        height: 630,
        alt: "Infinity Tech - AI dla Twojego Biznesu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Tech — Agenci AI dla biznesu",
    description: "Agenci AI, głosowi i tekstowi, oraz automatyzacje procesów dla Twojej firmy.",
    images: ["https://www.infinityteam.io/og.png"],
    creator: "@InfinityTech_PL",
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Infinity Tech',
  legalName: 'Infinity Tech Group sp. z o.o.',
  priceRange: 'od 5 000 zł',
  areaServed: 'PL',
  url: 'https://www.infinityteam.io',
  logo: 'https://www.infinityteam.io/logo.png',
  email: 'contact@infinityteam.io',
  telephone: '+48 735 170 957',
  description:
    'Budujemy agentów AI, głosowych (voice AI) i tekstowych, oraz automatyzacje procesów dla firm. Obsługa klienta 24/7, kadry, sprzedaż, integracja z 23+ kanałami, hosting w Polsce.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Rynek Solny 1 lok. 6',
    postalCode: '22-400',
    addressLocality: 'Zamość',
    addressRegion: 'lubelskie',
    addressCountry: 'PL',
  },
  // Numery rejestrowe: weryfikowalne w KRS i VIES, więc mocno potwierdzają,
  // że za serwisem stoi realny podmiot. Te same, co w stopce.
  vatID: 'PL9223090619',
  taxID: '9223090619',
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'KRS', value: '0001236454' },
    { '@type': 'PropertyValue', propertyID: 'NIP', value: '9223090619' },
    { '@type': 'PropertyValue', propertyID: 'REGON', value: '544554591' },
  ],
  sameAs: [
    'https://x.com/InfinityTech_PL',
    'https://www.linkedin.com/company/infinitytechgroup/',
    'https://clawlabs.pro',
    'https://superkadrowa.vercel.app',
    'https://asystenci-glosowi.vercel.app',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'contact@infinityteam.io',
    telephone: '+48 735 170 957',
    availableLanguage: ['pl', 'en'],
    areaServed: 'PL',
  },
  knowsAbout: [
    'agenci AI',
    'agent głosowy AI',
    'voicebot',
    'chatbot AI',
    'automatyzacja procesów',
    'OpenClaw',
    'automatyzacja HR i kadr',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent głosowy AI', url: 'https://www.infinityteam.io/uslugi/agent-glosowy-ai' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbot AI dla firm', url: 'https://www.infinityteam.io/uslugi/chatbot-ai' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatyzacja procesów AI', url: 'https://www.infinityteam.io/uslugi/automatyzacja-procesow-ai' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatyzacja HR i kadr', url: 'https://www.infinityteam.io/uslugi/automatyzacja-hr' } },
  ],
};

// WebSite — pomaga Google zrozumieć strukturę serwisu i wyświetlić nazwę marki
const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Infinity Tech',
  alternateName: 'Infinity Tech Group',
  url: 'https://www.infinityteam.io',
  inLanguage: 'pl-PL',
  publisher: { '@type': 'Organization', name: 'Infinity Tech', url: 'https://www.infinityteam.io' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="light" suppressHydrationWarning style={{ '--font-geist': GeistSans.style.fontFamily, '--font-jakarta': plusJakarta.style.fontFamily, '--font-jetbrains': jetbrainsMono.style.fontFamily } as React.CSSProperties}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
        <meta name="theme-color" content="#F5F5F7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className={`antialiased ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
        {children}
        <ThemeToggle />
        <CookieConsent />
      </body>
    </html>
  );
}
