

## Plan: Blog en Home + SEO Máximo

### 1. Sección "Blog Preview" en la página principal

Agregar una sección nueva entre `FAQSection` y `SocialProofBanner` en Index.tsx que muestre los 3 últimos artículos del blog con link a `/blog`. Título tipo "Últimos Artículos" con un botón "Ver todos →" que lleve a `/blog`. Cards compactas con imagen, categoría, título y link.

### 2. ScrollToTop en navegación entre páginas

Agregar un componente `ScrollToTop` que use `useLocation` de react-router para hacer scroll to top automático al cambiar de ruta. Integrarlo en `App.tsx` dentro del `BrowserRouter`.

### 3. SEO avanzado — Meta tags dinámicos

Instalar `react-helmet-async` y agregar:
- `HelmetProvider` en `App.tsx`
- `<Helmet>` en `Index.tsx` (meta tags de home)
- `<Helmet>` en `Blog.tsx` (meta tags de listado)
- `<Helmet>` en `BlogPost.tsx` (meta tags dinámicos por artículo: title, description, og:image, og:url, article schema)
- `<Helmet>` en `Privacidad.tsx`

### 4. Schema.org BlogPosting en cada artículo

En `BlogPost.tsx`, agregar JSON-LD `BlogPosting` schema con title, description, author, datePublished, image. Esto mejora rich snippets en Google.

### 5. Actualizar sitemap.xml

Ya está actualizado con las URLs del blog.

### Archivos a crear/modificar

| Archivo | Acción |
|---------|--------|
| `src/components/BlogPreviewSection.tsx` | Crear — preview de 3 posts para home |
| `src/pages/Index.tsx` | Modificar — agregar BlogPreviewSection |
| `src/App.tsx` | Modificar — agregar ScrollToTop + HelmetProvider |
| `src/pages/Blog.tsx` | Modificar — agregar Helmet meta tags |
| `src/pages/BlogPost.tsx` | Modificar — Helmet dinámico + BlogPosting schema |
| `src/pages/Privacidad.tsx` | Modificar — agregar Helmet |
| `package.json` | Agregar react-helmet-async |

