'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Send } from 'lucide-react';
import FadeIn from '@/components/react-bits/FadeIn';
import Aurora from '@/components/react-bits/Aurora';
import Particles from '@/components/react-bits/Particles';
import AnimatedGradient from '@/components/react-bits/AnimatedGradient';

// Sample blog posts data
const BLOG_POSTS = [
  {
    id: 'openclaw-ai-agents-2025',
    title: 'OpenCLAW - Przyszłość AI Agents w 2025 roku',
    excerpt: 'Odkryj najnowsze trendy w rozwoju otwartych frameworków AI Agentów i jak OpenCLAW zmienia krajobraz automatyzacji biznesowej.',
    category: 'OpenCLAW',
    date: '2025-03-08',
    readTime: '8 min czytania',
    author: 'Infinity Tech Team',
    coverImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'ai-w-marketingu',
    title: 'Jak AI zmienia marketing w 2025',
    excerpt: 'Sztuczna inteligencja rewolucjonizuje sposób tworzenia kampanii marketingowych. Dowiedz się, jak wykorzystać AI w swojej strategii.',
    category: 'AI',
    date: '2025-03-05',
    readTime: '6 min czytania',
    author: 'Anna Kowalska',
    coverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'automatyzacja-hr-ai',
    title: 'AI w HR: Automatyzacja rekrutacji i onboarding',
    excerpt: 'Przedstawiamy jak AI Agents transformują dział HR - od screeningu kandydatów po automatyczny onboarding nowych pracowników.',
    category: 'AI Agents',
    date: '2025-03-01',
    readTime: '7 min czytania',
    author: 'Piotr Nowak',
    coverImage: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'llm-w-biznesie',
    title: 'Wdrożenie LLM w przedsiębiorstwie - best practices',
    excerpt: 'Praktyczny przewodnik po wdrażaniu Large Language Models w firmie. Od wyboru modelu po integrację z istniejącymi systemami.',
    category: 'Technologie',
    date: '2025-02-25',
    readTime: '10 min czytania',
    author: 'Maria Wiśniewska',
    coverImage: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'ai-w-sprzedazy',
    title: 'AI Sales Agent - asystent, który sprzedaje 24/7',
    excerpt: 'Dowiedz się, jak AI Agent może przejąć obsługę lejdu sprzedażowego i zwiększyć konwersję o 150% bez dodatkowych kosztów.',
    category: 'AI Agents',
    date: '2025-02-20',
    readTime: '5 min czytania',
    author: 'Jan Lewandowski',
    coverImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'bezpieczenstwo-ai',
    title: 'Bezpieczeństwo AI w erze cyberzagrożeń',
    excerpt: 'Jak chronić swoje systemy AI przed atakami? Przegląd najnowszych metod zabezpieczeń i najlepszych praktyk w 2025.',
    category: 'Bezpieczeństwo',
    date: '2025-02-15',
    readTime: '9 min czytania',
    author: 'Infinity Tech Team',
    coverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

const CATEGORIES = ['Wszystkie', 'OpenCLAW', 'AI', 'AI Agents', 'Technologie', 'Bezpieczeństwo'];

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 py-1">
              <Image
                src="/-2147483648_-211442.png"
                alt="Infinity Tech Logo"
                width={42}
                height={42}
                className="object-contain"
              />
              <span className="text-xl md:text-2xl font-bold" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #4a4a6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                INFINITY TECH
              </span>
            </Link>
            <Link 
              href="/"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Powrót</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <Aurora colorStops={['#3A29FF', '#FF94B4', '#6366f1']} speed={0.8} blend={0.3} amplitude={1.2} />
        <Particles quantity={30} color="#6366f1" speed={0.5} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              Blog
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Najnowsze wiadomości ze świata AI, OpenCLAW i technologii. Bądź na bieżąco z innowacjami.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                >
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'Wszystkie' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="relative h-48">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-slate-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 relative overflow-hidden">
        <AnimatedGradient className="absolute inset-0" colors={['#6366f1', '#a855f7', '#ec4899', '#6366f1']} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Bądź na bieżąco
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Zapisz się do newslettera i otrzymuj najnowsze artykuły o AI prosto na swoją skrzynkę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Twój email" 
                className="flex-1 px-6 py-3 rounded-full text-slate-900 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-slate-100 transition-colors">
                Zapisz się
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">Infinity Tech</div>
              <p className="text-slate-400 mb-6">
                Tworzymy przyszłość biznesu z AI. Automatyzujemy, optymalizujemy, transformujemy.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/infinitytech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/infinitytech_pl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@infinitytech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://wa.me/infinitytech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="https://t.me/infinitytech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Na skróty</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/" className="hover:text-white transition-colors">Start</a></li>
                <li><a href="/#o-nas" className="hover:text-white transition-colors">O nas</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Usługi</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/agents" className="hover:text-white transition-colors">AI Agenci</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automatyzacja</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integracje</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@infinityteam.io
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +48 123 456 789
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Warszawa, Polska
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Infinity Tech. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
