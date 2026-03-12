

## Diagnostico y Correcciones

### 1. Bug critico: 404 en Vercel al navegar a /blog

**Causa raiz**: No existe `vercel.json` en el proyecto. Vercel, por defecto, busca el archivo fisico `/blog/index.html` en el build output. Como es una SPA (Single Page Application) con React Router, todas las rutas deben redirigirse a `index.html`. Sin esta configuracion, cualquier ruta que no sea `/` devuelve 404 de Vercel (no tu 404 custom).

**Solucion**: Crear `vercel.json` con rewrites para SPA.

### 2. Bug: Warning de refs en FloatingWhatsApp

La consola muestra "Function components cannot be given refs" porque `motion.a` dentro de `AnimatePresence` intenta pasar un ref al componente. No causa crash pero es un warning que conviene limpiar.

**Solucion**: Envolver el componente con `forwardRef` o reestructurar para que `AnimatePresence` no intente pasar refs innecesarios.

### 3. Performance: optimizaciones menores

- Las imagenes del blog no tienen `width`/`height` explicitos, lo que causa layout shift (CLS).
- Agregar `decoding="async"` a imagenes decorativas.

### Archivos a crear/modificar

| Archivo | Cambio |
|---------|--------|
| `vercel.json` (nuevo) | Rewrites para SPA — **soluciona el 404** |
| `src/components/FloatingWhatsApp.tsx` | Limpiar warning de refs |

### Detalle tecnico

**vercel.json**:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Esto le dice a Vercel: "para cualquier ruta que no sea un archivo estatico, servi index.html y deja que React Router maneje el routing del lado del cliente."

### Proximos pasos post-fix

1. Hacer push del `vercel.json` (se despliega automaticamente si tenes CI/CD con Vercel)
2. Verificar en celular que `/blog` y `/blog/:slug` cargan correctamente
3. Opcionalmente agregar el script de GA4 en `index.html`

