import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, ArrowLeft, Search } from 'lucide-react';
import { blogPosts, categories } from '@/data/blogPosts';
import { BlurFade } from '@/components/ui/blur-fade';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = !activeCategory || p.category === activeCategory;
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <Helmet>
        <title>Blog — MostachIA | IA, Automatización y Tecnología</title>
        <meta name="description" content="Artículos sobre inteligencia artificial, automatización, chatbots y tecnología para negocios. Recursos y guías de MostachIA." />
        <link rel="canonical" href="https://mostachia-ai-nexus.lovable.app/blog" />
        <meta property="og:title" content="Blog — MostachIA | IA, Automatización y Tecnología" />
        <meta property="og:description" content="Artículos sobre inteligencia artificial, automatización, chatbots y tecnología para negocios." />
        <meta property="og:url" content="https://mostachia-ai-nexus.lovable.app/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3d4b] via-[hsl(var(--background))] to-[hsl(var(--background))]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.07] rounded-full blur-[150px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <BlurFade>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
              Blog & <span className="text-gradient-primary">Recursos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10">
              Artículos sobre inteligencia artificial, automatización y tecnología para negocios.
            </p>
          </BlurFade>

          {/* Search + Filters */}
          <BlurFade delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artículos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-white/[0.05] border-white/[0.1]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    !activeCategory
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/[0.05] text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Todos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/[0.05] text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Featured Post */}
          {filtered.length > 0 && !search && !activeCategory && (
            <BlurFade delay={0.15}>
              <Link
                to={`/blog/${filtered[0].slug}`}
                className="group block mb-12"
              >
                <div className="glass-card overflow-hidden grid md:grid-cols-2 gap-0 hover:border-primary/20 transition-colors">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={filtered[0].image}
                      alt={filtered[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {filtered[0].category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {filtered[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                      {filtered[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {filtered[0].excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      Leer artículo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(search || activeCategory ? filtered : filtered.slice(1)).map((post, i) => (
              <BlurFade key={post.slug} delay={i * 0.05}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <article className="glass-card overflow-hidden h-full flex flex-col hover:border-primary/20 transition-colors">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.05]">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                        <span className="text-primary text-sm font-medium flex items-center gap-1">
                          Leer <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </BlurFade>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No se encontraron artículos.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Blog;
