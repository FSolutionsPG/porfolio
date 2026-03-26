# Portfolio v2 - Francisco Pachón Gallardo

Personal portfolio con diseño híbrido dark+light premium. Showcase de proyectos, servicios y skills de Full-Stack Developer y Founder de FSolutions PG.

## 🎨 Diseño y Características

- **Tema Híbrido Dark+Light** — Hero oscuro navy + secciones claras
- **Animaciones Suaves** — Framer Motion con efectos glassmorphism
- **Responsive Design** — Funciona perfectamente en mobile, tablet, desktop
- **SEO Optimizado** — Metadata, Open Graph, structured data
- **Performance** — Optimizaciones de imagen, code splitting, lazy loading

## 🚀 Stack Tecnológico

- **Next.js 15** — React framework full-stack
- **React 19** — UI components
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animaciones
- **Lucide React** — Icons

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Desarrollo local
npm run dev
# Abre http://localhost:3000

# Build para producción
npm run build

# Start servidor producción
npm start

# Lint
npm run lint
```

## 🔐 Desplegar en Firebase Hosting

### Requisitos Previos
```bash
npm install -g firebase-tools
firebase login
```

### Configuración Firebase
```bash
# En la raíz del proyecto
firebase init hosting
```

### Desplegar
```bash
npm run deploy
```

O manualmente:
```bash
npm run build
firebase deploy
```

## 📝 Secciones del Portfolio

1. **Hero** — Presentación con foto, badge, CTAs
2. **Experience** — Timeline de experiencia profesional
3. **Services** — Servicios ofrecidos (Full-Stack, Performance, Automation, SEO)
4. **Projects** — Proyectos destacados con métricas
5. **Skills** — Categorías de skills con barras animadas
6. **Contact** — Métodos de contacto
7. **Footer** — Links y redes sociales

## 🎯 Colores Principales

- **Primary** — `#0A192F` (Navy oscuro)
- **Accent** — `#00D4FF` (Cyan)
- **CTA** — `#FFC107` (Amarillo)
- **Light BG** — `#F8FAFC` (Casi blanco)

## 🔗 Enlaces

- **GitHub** — [https://github.com/FSolutionsPG/porfolio](https://github.com/FSolutionsPG/porfolio)
- **Website** — Portfolio desplegado en Firebase
- **FSolutions PG** — [https://fsolutionspg.com](https://fsolutionspg.com)

## 📞 Contacto

- **Email** — fpachongallardo@gmail.com
- **LinkedIn** — [https://www.linkedin.com/in/fpachongallardo/](https://www.linkedin.com/in/fpachongallardo/)
- **GitHub** — [https://github.com/FSolutionsPG](https://github.com/FSolutionsPG)

## 📸 Foto del Perfil

Para agregar tu foto al Hero, coloca una imagen en:
```
public/foto.jpg
```

La imagen será automáticamente optimizada y mostrada con un ring glow cyan.

## 🛠️ Customización

### Cambiar Colores
Edita `tailwind.config.ts`:
```ts
colors: {
  'primary': '#0A192F',
  'accent': '#00D4FF',
  'cta': '#FFC107',
  // ...
}
```

### Agregar Proyectos
Edita `components/sections/Projects.tsx` y añade nuevos objetos al array `projects`.

### Actualizar Skills
Edita `components/sections/Skills.tsx` y modifica `skillCategories`.

## 📱 Responsive

- **Mobile** — Optimizado para 320px+
- **Tablet** — Breakpoint md (768px)
- **Desktop** — Breakpoint lg (1024px)

## ⚡ Optimizaciones

- Image optimization con Next.js Image
- Font optimization con Google Fonts
- Code splitting automático
- Minificación con SWC
- Cache headers configurados en Firebase

## 📄 Licencia

© 2026 Francisco Pachón. Todos los derechos reservados.
