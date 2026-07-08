import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import ThemeToggle from "@/components/ThemeToggle";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://infinityteam.io'),
  title: {
    default: "Infinity Tech — Agenci AI dla biznesu",
    template: "%s | Infinity Tech",
  },
  description: "Budujemy agentów AI — głosowych i tekstowych — oraz automatyzacje procesów dla firm. Voice AI, obsługa klienta 24/7, kadry, sprzedaż i wdrożenia szyte na miarę. Dane w Polsce, zgodność z RODO.",
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
    url: "https://infinityteam.io",
    siteName: "Infinity Tech",
    title: "Infinity Tech — Agenci AI dla biznesu",
    description: "Budujemy agentów AI — głosowych i tekstowych — oraz automatyzacje procesów dla firm. Voice AI, obsługa klienta 24/7, kadry, sprzedaż i wdrożenia szyte na miarę. Dane w Polsce, zgodność z RODO.",
    images: [
      {
        url: "https://infinityteam.io/og.png",
        width: 1200,
        height: 630,
        alt: "Infinity Tech - AI dla Twojego Biznesu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Tech — Agenci AI dla biznesu",
    description: "Agenci AI — głosowi i tekstowi — oraz automatyzacje procesów dla Twojej firmy.",
    images: ["https://infinityteam.io/og.png"],
    creator: "@InfinityTech_PL",
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Infinity Tech',
  url: 'https://infinityteam.io',
  logo: 'https://infinityteam.io/logo.png',
  email: 'contact@infinityteam.io',
  telephone: '+48 735 170 957',
  description:
    'Budujemy agentów AI — głosowych (voice AI) i tekstowych — oraz automatyzacje procesów dla firm. Obsługa klienta 24/7, kadry, sprzedaż, integracja z 23+ kanałami, hosting w Polsce.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Rynek Solny 1 lok. 6',
    postalCode: '22-400',
    addressLocality: 'Zamość',
    addressRegion: 'lubelskie',
    addressCountry: 'PL',
  },
  sameAs: [
    'https://x.com/InfinityTech_PL',
    'https://www.linkedin.com/company/infinitytechgroup/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="dark" suppressHydrationWarning style={{ '--font-geist': GeistSans.style.fontFamily, '--font-jakarta': plusJakarta.style.fontFamily, '--font-jetbrains': jetbrainsMono.style.fontFamily } as React.CSSProperties}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
        <meta name="theme-color" content="#050B1F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
