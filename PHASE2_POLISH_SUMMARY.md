# Fase 2 — Polish premium: resumen y QA

## 1. Resumen de mejoras por bloque

### Branding premium
- **Hero**: Gradient mesh más vivo (más capas, puntos de luz y transiciones suaves), grain sutil (opacidad 0.04, menos octavas para no saturar). Fondo con más profundidad (152deg, más contraste violeta).
- **Tipografía hero**: Mejor jerarquía y legibilidad: `line-height` y `max-width` (18ch) para el título, `text-wrap: balance`, escalado por viewport (1.65rem → 1.85rem @360px → 2rem @430px → 3xl/4xl en sm/md/lg). Subtítulo con `leading-[1.55]` y tamaños progresivos.
- **Ritmo visual global**: Alternancia clara de fondos (default → soft → purple → default → soft → highlight → default → CTA gradient). Separadores sutiles (`.section-separator`) entre secciones. Padding vertical consistente en `SectionShell` (py-16 sm:py-20 md:py-24 lg:py-28).
- **Card hero**: Blur reducido (12px) para LCP, sombras suaves y borde claro para sensación premium sin peso.

### Conversión
- **Trust bar above fold**: Mini barra “Pago seguro · Acceso inmediato · Comunidad clínica” con iconos, colocada justo debajo del subtítulo del hero (alta visibilidad, fondo semitransparente).
- **CTA principal**: Clase `.btn-hero-cta` con más contraste (sombra, peso 600), estados hover (elevación) y active (scale). Botones con `min-h` para touch (44px/48px).
- **Pricing**: Precio $2,300 MXN muy destacado (bloque con fondo `motus-primary-subtle`, tipografía grande en color primary). CTA “Inscribirme ahora” y microcopy de política justo debajo: “Etapa inicial: pago único (sin mensualidades).” Certificado como add-on opcional con texto “Add-on opcional: …” y caja en dashed.
- **Testimonios**: Jerarquía mejorada (nombre en font-semibold, rol en xs), avatares más grandes (10x10) con sombra, quote con mejor `leading`, cards con microinteracción `active:scale-[0.99]`.

### Performance
- **LCP**: Hero sin efectos pesados en primer render: blur de la card reducido (20px → 12px), grain con menos octavas. Sin lazy-load del hero (contenido crítico).
- **Animaciones**: Sistema centralizado en `lib/motion.ts` (duraciones 0.25 / 0.35 / 0.45 s, easing `[0.22, 1, 0.36, 1]`). `viewport: { once: true }` en todas las secciones para no re-animar al scroll. Acordeón FAQ con duración 0.35s y mismo easing.
- **Evitar repaints**: Sin `will-change` excesivo; transiciones con `duration-200`/`300` en hover. `overflow-x-hidden` en `main` para evitar scroll horizontal en móvil.

---

## 2. Diff por archivo (resumen)

| Archivo | Cambios principales |
|--------|----------------------|
| `lib/motion.ts` | **Nuevo.** Constantes MOTION, sectionReveal, cardReveal, listItemReveal, containerStagger. |
| `app/globals.css` | Hero: mesh + noise mejorados, .section-separator, .btn-hero-cta, card-hero-glass con blur 12px. |
| `app/page.tsx` | `overflow-x-hidden` en main. |
| `tailwind.config.ts` | keyframes y animation para accordion-down/up (0.35s, ease-out). |
| `components/sections/HeroSection.tsx` | Trust bar arriba de bullets, tipografía responsive, CTA con .btn-hero-cta, motion desde lib/motion. |
| `components/sections/SectionShell.tsx` | Prop separatorTop, sectionReveal, padding estándar. |
| `components/sections/SocialProofSection.tsx` | Separador superior, containerStagger/cardReveal, testimonios con mejor jerarquía y avatares. |
| `components/sections/PricingSection.tsx` | Precio en bloque destacado, policy bajo CTA, certificado “Add-on opcional”, motion constants. |
| `components/sections/FAQSection.tsx` | separatorTop. |
| `components/sections/IncludedSection.tsx` | containerStagger/cardReveal, separatorTop, active:scale en cards. |
| `components/sections/WhoSection.tsx` | containerStagger + itemReveal, separatorTop={false}. |
| `components/sections/FinalCTASection.tsx` | sectionReveal, eliminado hover:scale en CTA. |
| `components/sections/SyllabusSection.tsx` | separatorTop. |
| `components/ui/button.tsx` | min-h para touch (44/40/48), lg con px responsive. |
| `components/ui/accordion.tsx` | Chevron con transition 300ms y easing, aria-hidden. |
| `components/Navbar.tsx` | Padding horizontal responsive (min-[360px]:px-5). |

---

## 3. Checklist QA manual

### Desktop (Chrome/Firefox/Safari)
- [ ] Hero: título y subtítulo legibles, sin cortes; trust bar visible con los 3 ítems.
- [ ] CTA “Inscribirme ahora” (hero): contraste claro, hover eleva y active baja.
- [ ] Scroll: separadores visibles entre secciones; alternancia de fondos clara (blanco / soft / purple / highlight).
- [ ] Testimonios: nombres y roles con jerarquía clara; avatares con iniciales.
- [ ] Pricing: precio $2,300 en bloque destacado; “Inscribirme ahora” y texto “Etapa inicial: pago único (sin mensualidades).” visibles; bloque certificado “+$400 MXN” y “Add-on opcional” legibles.
- [ ] FAQ: acordeón abre/cierra con animación suave (~0.35s); chevron rota.
- [ ] Cards (Incluye, Testimonios): hover suave, sin saltos; active scale sutil.
- [ ] Nav: enlaces y CTA funcionan; scroll suave a Temario / Precios / FAQ.

### Mobile (360px, 390px, 430px)
- [ ] Hero: título no se corta; tamaños de fuente legibles en 360 y 390.
- [ ] Padding horizontal suficiente (sin tocar bordes); CTA principal visible sin scroll horizontal.
- [ ] Trust bar en una o dos líneas, legible.
- [ ] Pricing: card no saturada; precio y CTA bien espaciados; certificado en bloque claro.
- [ ] Botones: área táctil ≥ 44px; “Inscribirme ahora” fácil de pulsar.
- [ ] Navbar: logo + CTA visibles; sin solapamientos.
- [ ] Sin scroll horizontal en ninguna sección (`overflow-x-hidden`).

### Performance y accesibilidad
- [ ] Primera carga: LCP razonable (hero visible pronto); sin bloqueos por JS pesado.
- [ ] Animaciones: no redundantes; al volver a hacer scroll las secciones no re-animan (once: true).
- [ ] Focus visible en botones y acordeón (ring al tab).
- [ ] Contraste: texto blanco sobre hero y texto oscuro sobre fondos claros legibles.

---

*Oferta sin cambios: $2,300 MXN contado; certificado +$400 MXN opcional.*
