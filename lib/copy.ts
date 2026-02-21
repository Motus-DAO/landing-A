export const CHECKOUT_URL = "[[CHECKOUT_URL]]";

// ——— CTAs unificados (usar en Hero, Navbar, después de beneficios, Pricing, CTA final) ———
export const ctaCopy = {
  primary: "Inscribirme ahora",
  secondary: "Ver temario"
};

// ——— Hero ———
export const heroCopy = {
  eyebrow: "Para psicólogos y terapeutas",
  title: "Técnica Avanzada en Psicoterapia.",
  subtitle:
    "Formación online en trauma, regulación emocional y apego. Aprende protocolos que puedes usar desde la primera sesión, con supervisión y comunidad clínica.",
  bullets: [
    "Protocolos claros para trauma complejo, regulación y apego.",
    "Casos clínicos guiados: seguridad y límites en la práctica.",
    "Herramientas concretas para sesiones individuales y grupos.",
    "Material listo para llevar a tu consulta.",
    "Comunidad clínica para no acompañar sola tu práctica."
  ],
  primaryCta: ctaCopy.primary,
  secondaryCta: ctaCopy.secondary,
  microProof: ["Pago seguro", "Soporte incluido", "Acceso inmediato"],
  /** Microcopy de urgencia real: etapa, precio, cupos cuando aplique. Sin contadores falsos. */
  urgencyLine:
    "Etapa inicial de implementación: precio actual sujeto a actualización en próximas fases. Plazas limitadas por cohorte."
};

// ——— A/B testing: variantes de copy (sin implementar lógica; intercambiar en copy según test). ———
export const abTestCopy = {
  hero: {
    A: {
      title: "Técnica Avanzada en Psicoterapia.",
      subtitle:
        "Formación online en trauma, regulación emocional y apego. Aprende protocolos que puedes usar desde la primera sesión, con supervisión y comunidad clínica.",
      focus: "resultado clínico"
    },
    B: {
      title: "Técnica Avanzada en Psicoterapia.",
      subtitle:
        "Metodología clara para trauma, regulación y apego. Sin humo: marcos aplicables, supervisión y comunidad para llevar lo aprendido a tu consulta.",
      focus: "claridad y metodología"
    }
  },
  cta: {
    A: "Inscribirme ahora",
    B: "Reservar mi lugar"
  }
};

// ——— Para quién / para quién no ———
export const whoCopy = {
  title: "¿Para quién es — y para quién no es — esta formación?",
  intro:
    "Queremos que sepas rápido si este espacio encaja con tu práctica y tu momento profesional.",
  for: [
    "Psicólogos, psiquiatras y terapeutas con base clínica que quieren actualizar sus modelos de intervención.",
    "Profesionales de salud mental que trabajan con trauma, desregulación emocional o apego inseguro.",
    "Facilitadores de grupos, coaches y terapeutas somáticos que buscan más estructura y rigor.",
    "Quienes ya acompañan procesos complejos y sienten que necesitan mapas más claros.",
    "Equipos clínicos que buscan un lenguaje común y marcos replicables."
  ],
  notFor: [
    "Quienes buscan atajos rápidos sin compromiso con el proceso terapéutico.",
    "Personas sin experiencia acompañando procesos emocionales complejos.",
    "Quienes buscan solo formación en trading, NFTs o cripto.",
    "Quienes no están dispuestos a revisar sus propios sesgos y práctica.",
    "Formaciones solo teóricas sin intención de aplicar en consulta."
  ]
};

// ——— Incluye ———
export const includedCopy = {
  title: "Todo lo que incluye el programa",
  subtitle:
    "Lo necesario para integrar los modelos en tu práctica, sin perderte en teoría infinita.",
  items: [
    {
      title: "Módulos clínicos grabados",
      description:
        "Vídeos con marcos claros sobre trauma, regulación, apego y diseño de intervenciones. Base teórica y práctica.",
      badge: "Base teórica + práctica",
      icon: "PlayCircle"
    },
    {
      title: "Sesiones en vivo y supervisión",
      description:
        "Espacios periódicos para revisar casos, roleplays y aterrizar los modelos en tu contexto.",
      badge: "Aplicación real",
      icon: "Video"
    },
    {
      title: "Guías y plantillas descargables",
      description:
        "Mapas, protocolos y checklists para estructurar sesiones, grupos y programas híbridos.",
      badge: "Listo para usar",
      icon: "FileDown"
    },
    {
      title: "Comunidad clínica curada",
      description:
        "Acceso a un espacio seguro con otros profesionales que comparten lenguaje y valores.",
      badge: "Red de pares",
      icon: "Users"
    },
    {
      title: "Introducción a herramientas Web3",
      description:
        "Módulo opcional para explorar cómo la tecnología puede sostener modelos de cuidado más sostenibles, sin necesidad de saber de cripto.",
      badge: "Opcional",
      icon: "Globe"
    },
    {
      title: "Actualizaciones y nuevos casos",
      description:
        "Acceso a material adicional, nuevos casos y revisiones del contenido base durante tu periodo de acceso.",
      badge: "Vivo y evolutivo",
      icon: "RefreshCw"
    }
  ]
};

export const syllabusCopy = {
  title: "Temario detallado",
  items: [
    {
      id: "mod-1",
      title: "Módulo 1 — Fundamentos de trauma y regulación",
      content:
        "Definiciones operativas de trauma, ventana de tolerancia, modelos polivagales y cómo traducirlos a sesión sin jerga innecesaria."
    },
    {
      id: "mod-2",
      title: "Módulo 2 — Apego, vínculos y límites",
      content:
        "Patrones de apego, dinámicas relacionales en contextos online y presenciales, y cómo sostener límites claros y cuidados."
    },
    {
      id: "mod-3",
      title: "Módulo 3 — Diseño de intervenciones y grupos",
      content:
        "Cómo pasar de sesiones aisladas a procesos: diseño de ciclos, grupos de regulación y programas que puedas sostener en el tiempo."
    },
    {
      id: "mod-4",
      title: "Módulo 4 — Sostenibilidad y modelos de cuidado",
      content:
        "Cómo cuidar tu práctica, tus límites y la sostenibilidad económica de tu trabajo, sin perder el foco clínico."
    },
    {
      id: "mod-5",
      title: "Módulo 5 — Integración, casos y ética",
      content:
        "Revisión de casos reales, dilemas éticos y construcción de tu propio mapa de intervención alineado con tus valores."
    }
  ]
};

// ——— Pricing: claridad total ———
export const pricingCopy = {
  title: "Inversión en tu formación",
  /** Una línea que explica el valor del programa. */
  valueProposition:
    "Programa completo: módulos, supervisión, materiales y comunidad. Un solo pago en esta etapa.",
  subtitle:
    "Pago único. Sin mensualidades en esta etapa: accedes al programa completo con un solo pago.",
  programName: "Técnica Avanzada en Psicoterapia",
  price: "2,300",
  currency: "MXN",
  priceNote: "Pago único — sin mensualidades en esta etapa.",
  features: [
    "Acceso completo a todos los módulos grabados.",
    "Sesiones en vivo y supervisión clínica.",
    "Guías y plantillas descargables.",
    "Comunidad clínica y actualizaciones del contenido.",
    "Soporte para dudas técnicas del curso."
  ],
  certificateAddOn: {
    label: "Certificado y credenciales",
    price: "400",
    currency: "MXN",
    description: "Add-on opcional para certificación y credenciales oficiales."
  },
  primaryCta: ctaCopy.primary,
  /** Texto debajo del botón principal. */
  belowButtonText:
    "Pago único. El certificado es opcional y se contrata por separado (+$400 MXN).",
  policyNote:
    "Etapa inicial: pago único (sin mensualidades). El certificado es opcional y se contrata por separado.",
  /** Urgencia real: precio sujeto a actualización por etapas. */
  urgencyNote:
    "Precio actual vigente para esta etapa. En próximas fases el programa puede ajustarse."
};

// ——— Trust: qué pasa después de comprar + barra ———
export const trustCopy = {
  barItems: ["Pago seguro", "Soporte incluido", "Acceso inmediato"],
  whatHappensAfter: [
    "Recibes acceso a la plataforma en las 24–48 h tras confirmar el pago.",
    "Puedes empezar con los módulos grabados y unirte a la comunidad desde el día uno.",
    "Soporte por correo para dudas técnicas y espacios en vivo para casos y supervisión."
  ],
  whatHappensTitle: "Qué pasa después de comprar",
  whatHappensSubtitle: "Sin sorpresas: pasos claros desde el pago hasta tu primera sesión en vivo."
};

// ——— Quién lidera la formación (autoridad sobria) ———
export const whoLeadsCopy = {
  title: "Quién lidera la formación",
  subtitle:
    "Espacio diseñado por profesionales con experiencia en clínica, supervisión y trabajo con trauma y regulación.",
  name: "Equipo MotusDAO",
  role: "Diseño y facilitación clínica",
  bio: "Formación y supervisión a cargo de psicólogos y terapeutas con trayectoria en trauma, apego y modelos integrativos. Enfoque en protocolos aplicables y ética de cuidado."
};

// ——— FAQ: preguntas generales + objeciones de compra (persuasivo y ético) ———
export const faqCopy = {
  title: "Preguntas frecuentes",
  items: [
    // ——— Objeciones de compra (must-have) ———
    {
      id: "faq-time",
      question: "¿Y si no me alcanza el tiempo?",
      answer:
        "El contenido está en vídeo y puedes avanzar a tu ritmo. Las sesiones en vivo se graban y las guías están disponibles cuando las necesites. Está pensado para profesionales en activo: carga realista y aplicación gradual."
    },
    {
      id: "faq-prev",
      question: "¿Y si ya tengo formación previa en trauma o apego?",
      answer:
        "Perfecto. Aquí encontrarás marcos operativos y protocolos que complementan lo que ya sabes: diseño de intervenciones, supervisión de casos y comunidad clínica. Muchos participantes llegan con formación previa y buscan estructura y aplicación directa."
    },
    {
      id: "faq-serve",
      question: "¿Cómo sé que sí me va a servir?",
      answer:
        "El programa está centrado en protocolos aplicables desde la primera sesión, casos clínicos guiados y supervisión. No prometemos resultados mágicos: sí un espacio serio para actualizar marcos y llevarlos a tu consulta. Si tienes dudas sobre si encaja con tu perfil, escríbenos y te orientamos."
    },
    {
      id: "faq-price",
      question: "¿Por qué cuesta esto?",
      answer:
        "Incluye módulos grabados, sesiones en vivo, supervisión clínica, materiales descargables, comunidad y soporte. Es un pago único en esta etapa (sin mensualidades). El precio refleja la calidad del contenido y el acompañamiento; en próximas fases puede ajustarse."
    },
    {
      id: "faq-support",
      question: "¿Hay soporte?",
      answer:
        "Sí. Incluye soporte por correo para dudas técnicas del curso y espacios en vivo para revisar casos y supervisión grupal. No estás sola en el proceso."
    },
    // ——— FAQ generales ———
    {
      id: "faq-1",
      question: "¿Necesito ser psicólogo colegiado para entrar?",
      answer:
        "Recomendamos tener experiencia acompañando procesos emocionales complejos (terapia, coaching avanzado, facilitación de grupos). Si no estás segura, escríbenos y revisamos tu caso."
    },
    {
      id: "faq-2",
      question: "¿Cuánto tiempo tendré acceso al contenido?",
      answer:
        "Tendrás acceso mínimo de 12 meses a los módulos grabados y a las actualizaciones del contenido base durante ese periodo."
    },
    {
      id: "faq-3",
      question: "No sé nada de Web3, ¿me voy a perder?",
      answer:
        "No. La prioridad es lo clínico. Las piezas de Web3 son opcionales y se explican en lenguaje sencillo, sin jerga técnica."
    },
    {
      id: "faq-4",
      question: "¿Puedo obtener factura para mi consulta o empresa?",
      answer:
        "Sí, podrás solicitar factura con tus datos fiscales una vez completado el pago."
    },
    {
      id: "faq-5",
      question: "¿Cómo es el pago? ¿Hay financiamiento?",
      answer:
        "En esta etapa el programa es pago único: no hay mensualidades ni financiamiento. Son $2,300 MXN por el programa. El certificado opcional son +$400 MXN y se contrata por separado."
    }
  ]
};

// ——— CTA final ———
export const finalCtaCopy = {
  title: "Si esto resuena con tu práctica, es un buen momento para entrar.",
  subtitle:
    "No es una formación más para coleccionar certificados: es un espacio para revisar cómo acompañas, actualizar tus marcos y diseñar procesos más sostenibles.",
  primaryCta: ctaCopy.primary,
  trustLine:
    "Pago seguro · Acceso tras confirmar pago · Soporte incluido. Sin promesas vacías: sí compromiso con tu práctica."
};

export const socialProofCopy = {
  title: "Lo que dicen quienes ya han pasado por espacios como este",
  subtitle:
    "Testimonios y señales de confianza. Sustituye estos ejemplos con casos reales de tu práctica o proyectos.",
  items: [
    {
      name: "Nombre Apellido",
      role: "Psicóloga clínica, enfoque integrativo",
      quote:
        "\"Aquí iría una cita breve sobre cómo la formación le ayudó a estructurar mejor sus procesos y sostener grupos con más seguridad.\"",
      validation: "Pendiente validación real"
    },
    {
      name: "Nombre Apellido",
      role: "Psiquiatra, unidad de trauma",
      quote:
        "\"Placeholder: impacto en su práctica, claridad de los modelos y comunidad clínica que encontró.\"",
      validation: "Pendiente validación real"
    },
    {
      name: "Nombre Apellido",
      role: "Facilitador de grupos",
      quote:
        "\"Placeholder: cómo pudo traducir conceptos complejos en experiencias seguras para comunidades online.\"",
      validation: "Pendiente validación real"
    }
  ],
  logosTitle: "Han colaborado o co-diseñado con"
};
