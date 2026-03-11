import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight, MessageCircle } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';
import { BlurFade } from '@/components/ui/blur-fade';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { CONFIG } from '@/config/constants';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <Helmet>
        <title>{post.title} — MostachIA Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://mostachia-ai-nexus.lovable.app/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://mostachia-ai-nexus.lovable.app/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": { "@type": "Organization", "name": "MostachIA" },
            "publisher": { "@type": "Organization", "name": "MostachIA" },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://mostachia-ai-nexus.lovable.app/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>
      <Navbar />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3d4b] via-[hsl(var(--background))] to-[hsl(var(--background))]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.07] rounded-full blur-[150px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <BlurFade>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {post.category}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </BlurFade>

          {/* Hero Image */}
          <BlurFade delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </BlurFade>

          {/* Content */}
          <BlurFade delay={0.15}>
            <div className="prose-custom space-y-5">
              {post.content.map((block, i) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl font-bold font-display mt-10 mb-4 text-foreground">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                if (block.startsWith('**') && block.endsWith('**')) {
                  return (
                    <p key={i} className="text-foreground/90 font-semibold">
                      {block.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                // Handle inline bold
                const parts = block.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={i} className="text-foreground/70 leading-relaxed">
                    {parts.map((part, j) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={j} className="text-foreground/90">{part.replace(/\*\*/g, '')}</strong>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </p>
                );
              })}
            </div>
          </BlurFade>

          {/* Share + CTA */}
          <BlurFade delay={0.2}>
            <div className="mt-12 pt-8 border-t border-white/[0.05] space-y-8">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-white/20"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>

              {/* CTA Box */}
              <div className="glass-card p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold font-display mb-2">
                  ¿Querés implementar esto en tu negocio?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Agendá una reunión gratuita de 30 minutos y te mostramos cómo podemos ayudarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <ShimmerButton
                    shimmerColor="rgba(96, 185, 154, 0.8)"
                    background="linear-gradient(135deg, hsl(159 37% 55%), hsl(159 37% 45%))"
                    borderRadius="12px"
                    className="px-6 py-3 font-semibold"
                    onClick={() => window.open(CONFIG.CALCOM_URL, '_blank')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Reunión Gratis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </ShimmerButton>
                  <Button
                    variant="outline"
                    className="rounded-xl border-white/20 hover:border-primary/50"
                    asChild
                  >
                    <a href={CONFIG.WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Related */}
          {related.length > 0 && (
            <BlurFade delay={0.25}>
              <div className="mt-16">
                <h3 className="text-2xl font-bold font-display mb-6">Artículos relacionados</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="glass-card overflow-hidden group hover:border-primary/20 transition-colors"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs mb-2">
                          {rp.category}
                        </Badge>
                        <h4 className="font-display font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {rp.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}
        </article>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPost;
