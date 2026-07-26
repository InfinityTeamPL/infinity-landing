import { MetadataRoute } from 'next';

/* Daty publikacji/aktualizacji są STAŁE, nie new Date().
   Przy `new Date()` każdy deploy zgłaszałby Google, że zmieniły się wszystkie
   strony naraz — sygnał, któremu wyszukiwarka szybko przestaje ufać.
   Zmieniając treść strony, zaktualizuj tu jej datę ręcznie. */
const base = 'https://www.infinityteam.io';

// Data ostatniej dużej przebudowy serwisu
const REBUILD = '2026-07-25';

type Entry = {
  path: string;
  lastModified: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

const ENTRIES: Entry[] = [
  { path: '', lastModified: REBUILD, changeFrequency: 'weekly', priority: 1 },

  // Usługi
  { path: '/uslugi', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.9 },
  { path: '/uslugi/agent-glosowy-ai', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/uslugi/chatbot-ai', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/uslugi/automatyzacja-procesow-ai', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/uslugi/automatyzacja-hr', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },

  // Branże
  { path: '/branze', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.9 },
  { path: '/branze/voicebot-dla-przychodni', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/ai-w-rekrutacji', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/voicebot-dla-transportu', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/voicebot-dla-salonow', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/ai-dla-administracji', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/chatbot-dla-sklepu-internetowego', lastModified: '2026-07-26', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/voicebot-dla-gastronomii', lastModified: '2026-07-26', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/branze/ai-dla-kancelarii', lastModified: '2026-07-26', changeFrequency: 'monthly', priority: 0.8 },

  // Decyzyjne
  { path: '/cennik', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/kalkulator', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/case-studies', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/openclaw', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.8 },

  // Treści
  { path: '/slownik', lastModified: REBUILD, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', lastModified: REBUILD, changeFrequency: 'weekly', priority: 0.7 },
  { path: '/blog/agent-ai-a-chatbot', lastModified: '2026-07-25', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog/ile-kosztuje-chatbot-ai', lastModified: '2026-07-25', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog/jak-wdrozyc-ai-w-firmie', lastModified: '2026-07-25', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog/ile-kosztuje-voicebot', lastModified: '2026-07-26', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog/voicebot-czy-chatbot', lastModified: '2026-07-26', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog/voicebot-a-ivr', lastModified: '2026-07-26', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog/agent-ai-czy-nowy-pracownik', lastModified: '2026-07-26', changeFrequency: 'yearly', priority: 0.6 },
  // /agents celowo pominięte — 301 na /uslugi (patrz next.config.js)

  // Feed newsowy — jedyna strona, która faktycznie zmienia się codziennie (ISR co 2h)
  { path: '/swiat-ai', lastModified: REBUILD, changeFrequency: 'daily', priority: 0.9 },

  // Formalne
  { path: '/polityka-prywatnosci', lastModified: REBUILD, changeFrequency: 'yearly', priority: 0.3 },
  { path: '/regulamin', lastModified: REBUILD, changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ENTRIES.map((e) => ({
    url: `${base}${e.path}`,
    lastModified: new Date(`${e.lastModified}T00:00:00Z`),
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
