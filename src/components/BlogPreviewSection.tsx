import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { BlurFade } from '@/components/ui/blur-fade';
import { Badge } from '@/components/ui/badge';

const latestPosts = blogPosts.slice(0, 3);

export const BlogPreviewSection = () => (
  <section className="py-20 relative">
    <div className="container mx-auto px-6">
      <BlurFade>
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Últimos <span className="text-gradient-primary">Artículos</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Insights sobre IA, automatización y tecnología para hacer crecer tu negocio.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </BlurFade>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post, i) => (
          <BlurFade key={post.slug} delay={i * 0.08}>
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
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/10">
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

      <Link
        to="/blog"
        className="sm:hidden flex items-center justify-center gap-2 text-primary font-medium mt-8 hover:underline"
      >
        Ver todos los artículos <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);
