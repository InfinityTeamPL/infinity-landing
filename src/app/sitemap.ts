import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://infinityteam.io';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/swiat-ai`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/kalkulator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/uslugi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/uslugi/agent-glosowy-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/uslugi/chatbot-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/uslugi/automatyzacja-procesow-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/uslugi/automatyzacja-hr`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cennik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/openclaw`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/branze/voicebot-dla-przychodni`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/branze/ai-w-rekrutacji`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/agent-ai-a-chatbot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/ile-kosztuje-chatbot-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/jak-wdrozyc-ai-w-firmie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/agents`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/polityka-prywatnosci`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/regulamin`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
