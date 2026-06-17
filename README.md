# RUSH Mango Tropical — Landing Page

Landing page moderna y premium para una bebida energética sabor mango, construida con **React + Vite** y CSS Modules puro (sin frameworks de UI).

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (por defecto `http://localhost:5173`).

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    ParticlesBackground/   Fondo animado de partículas (canvas)
    Navbar/                 Barra de navegación fija con menú móvil
    Logo/                   Marca "RUSH" (SVG)
    CanIllustration/        Ilustración original de la lata (SVG reutilizable)
    Hero/                   Sección principal
    Gallery/                Galería de producto con efecto glassmorphism
    Benefits/               4 tarjetas de beneficios
    Stats/                  Contadores animados
    Testimonials/           Tarjetas de testimonios
    CTASection/             Llamado a la acción final
    Footer/                 Pie de página
  hooks/
    useScrollReveal.js       Animación de entrada al hacer scroll
    useCountUp.js             Contador animado
```

## Notas

- Todos los botones de **"Comprar Ahora"** y **"Contactar por WhatsApp"** son visuales / de navegación; no procesan pagos ni abren un chat real todavía. Reemplaza el `href="https://wa.me/"` por tu número real (`https://wa.me/57XXXXXXXXXX`) y conecta "Comprar Ahora" a tu checkout cuando estén listos.
- La ilustración de la lata es una pieza de diseño original (SVG), pensada para que puedas reemplazarla fácilmente por una foto real del producto si la tienes.
- Las imágenes de perfil de los testimonios usan el servicio gratuito `pravatar.cc` como placeholder; cámbialas por fotos reales de tus clientes cuando las tengas.
- El diseño respeta `prefers-reduced-motion` para usuarios sensibles al movimiento.
