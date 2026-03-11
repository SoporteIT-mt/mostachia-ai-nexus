import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Privacidad = lazy(() => import("./pages/Privacidad"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            <TooltipProvider>
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={<div className="min-h-screen bg-background" />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/privacidad" element={<Privacidad />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </MotionConfig>
        </LazyMotion>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
