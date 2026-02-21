# Resumen de implementación CRO — Landing Técnica Avanzada en Psicoterapia

Contexto fijo respetado: oferta $2,300 MXN, certificado +$400 MXN, pago único, público psicólogos/terapeutas hispanohablantes.

---

## 1. Archivos modificados

| Archivo | Cambios |
|--------|---------|
| `lib/copy.ts` | Copy reescrito (hero, who, included, pricing, FAQ+objeciones, final CTA). Añadidos: `ctaCopy`, `trustCopy`, `whoLeadsCopy`, `abTestCopy`, urgencia, valor en pricing, microcopy bajo botón. |
| `components/sections/HeroSection.tsx` | Urgencia desde `heroCopy.urgencyLine`. Trust bar ya usaba `heroCopy.microProof` (textos mejorados en copy). |
| `components/sections/WhoSection.tsx` | Título e intro desde `whoCopy.title` y `whoCopy.intro`. |
| `components/sections/IncludedSection.tsx` | Subtítulo desde `includedCopy.subtitle`. Bloque CTA después de beneficios (primario + secundario). |
| `components/sections/PricingSection.tsx` | Línea de valor `valueProposition`, `primaryCta` y `belowButtonText` desde copy. Nota de urgencia. Bloque "Qué pasa después de comprar" con `trustCopy`. |
| `components/sections/FinalCTASection.tsx` | Línea de confianza desde `finalCtaCopy.trustLine`. |
| `components/sections/FAQSection.tsx` | Sin cambios estructurales; contenido ampliado en `lib/copy.ts` (objeciones + FAQ generales). |
| `components/Navbar.tsx` | CTA del botón desde `ctaCopy.primary`. |
| `components/sections/WhoLeadsSection.tsx` | **Nuevo.** Sección "Quién lidera la formación" con `whoLeadsCopy`. |
| `app/page.tsx` | Inserción de `WhoLeadsSection` entre SocialProof e Included. |

---

## 2. Resumen de mejoras por bloque

### Claridad
- **Hero:** Subtítulo y bullets más directos; resultado tangible (protocolos desde la primera sesión).
- **Para quién / no:** Intro y listas reescritas; tono profesional y sin humo; eliminada jerga "psicólogxs" en copy (puedes volver a inclusivo si lo usas en toda la web).
- **Incluye:** Subtítulo desde copy; descripciones más concretas y orientadas a aplicación.
- **Pricing:** Una línea de valor clara (`valueProposition`), subtítulo y precio + certificado explícitos ($2,300 programa, +$400 certificado opcional, pago único). Texto bajo botón y nota de política unificados en copy.

### Objeciones
- Nuevas FAQs en `faqCopy.items` (al inicio del listado):
  - ¿Y si no me alcanza el tiempo?
  - ¿Y si ya tengo formación previa?
  - ¿Cómo sé que sí me va a servir?
  - ¿Por qué cuesta esto?
  - ¿Hay soporte?
- Respuestas persuasivas y éticas: sin promesas falsas, con transparencia y opción de contacto.

### Urgencia (ética, sin falsa escasez)
- **Hero:** `urgencyLine`: etapa inicial, precio sujeto a actualización en próximas fases, plazas limitadas por cohorte.
- **Pricing:** `urgencyNote`: precio vigente para esta etapa; posible ajuste en fases posteriores.
- Sin contadores ni fechas inventadas.

### CTA
- **Unificación:** Primario = "Inscribirme ahora", Secundario = "Ver temario" (`ctaCopy.primary` / `ctaCopy.secondary`).
- **Ubicaciones:** Hero, Navbar, después de Incluye (bloque nuevo), card de Pricing, CTA final. Secundario en Hero y en bloque post-Incluye (scroll a temario).

### Credibilidad y confianza
- **Barra de confianza (Hero):** "Pago seguro · Soporte incluido · Acceso inmediato" (`heroCopy.microProof`).
- **Qué pasa después de comprar:** Bloque en Pricing con título, subtítulo y 3 pasos desde `trustCopy.whatHappensAfter`.
- **Quién lidera:** Nueva sección con `whoLeadsCopy` (nombre, rol, bio en tono sobrio).
- **Cierre:** `finalCtaCopy.trustLine` bajo el botón del CTA final.

### A/B (solo copy, sin lógica)
- En `lib/copy.ts`, objeto `abTestCopy`:
  - **Hero A:** foco resultado clínico (subtítulo actual).
  - **Hero B:** foco claridad/metodología (subtítulo alternativo).
  - **CTA A:** "Inscribirme ahora".
  - **CTA B:** "Reservar mi lugar".
Para probar: sustituir en los componentes los textos por `abTestCopy.hero.A`/`abTestCopy.hero.B` y `abTestCopy.cta.A`/`abTestCopy.cta.B` según variante.

---

## 3. Métricas a monitorear (7 días)

| Métrica | Descripción |
|--------|-------------|
| **CTR a checkout** | % de visitantes que hacen clic en cualquier CTA que lleva a checkout (Hero, Navbar, post-Incluye, Pricing, CTA final). |
| **Begin checkout rate** | % de visitantes que inician el proceso de checkout (página de pago cargada / primer paso completado). |
| **Purchase rate** | % de visitantes que completan la compra (conversión final). |
| **Drop-off en checkout** | % que abandonan después de iniciar checkout (por paso si hay varios: inicio → datos → pago). |

**Recomendación:** Si usas Google Analytics 4 o similar, configura eventos para: clic en CTA primario, llegada a URL de checkout, y evento de compra. Segmenta por origen del clic (hero, navbar, incluye, pricing, final-cta) para ver qué bloques convierten mejor.

---

*Implementación lista. Arquitectura, estilos y animaciones existentes mantenidos; sin nuevas dependencias.*
