import { Differentiator, Faq, NavItem, ProcessStep, Service } from '../models/content.models';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Servicios', href: '#servicios' }, { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'IA y automatización', href: '#automatizacion' }, { label: 'Industrias', href: '#industrias' },
  { label: 'Preguntas frecuentes', href: '#preguntas' }, { label: 'Contacto', href: '#contacto' }
];

export const SERVICES: readonly Service[] = [
  { number: '01', title: 'Aplicaciones web', description: 'Plataformas digitales diseñadas para operar desde cualquier navegador.', items: ['Dashboards', 'SaaS', 'Marketplaces', 'Herramientas internas', 'Plataformas web'] },
  { number: '02', title: 'Aplicaciones móviles', description: 'Aplicaciones iOS y Android orientadas a clientes, equipos y operaciones.', items: ['Apps para clientes', 'Apps internas', 'Soluciones multiplataforma', 'Web a mobile'] },
  { number: '03', title: 'Software a medida', description: 'Sistemas construidos alrededor de los procesos reales de cada organización.', items: ['ERP y CRM personalizados', 'Sistemas de gestión', 'Reservas y turnos', 'Membresías', 'Automatización'] },
  { number: '04', title: 'MVP y productos digitales', description: 'Ideas convertidas en productos funcionales que pueden validarse y evolucionar.', items: ['Desarrollo de MVP', 'Prototipos funcionales', 'Validación', 'Desarrollo desde cero', 'Evolución de producto'] },
  { number: '05', title: 'Integraciones y APIs', description: 'Conectamos plataformas y eliminamos procesos aislados.', items: ['APIs', 'Webhooks', 'CRM y ERP', 'Servicios backend', 'Sincronización de datos'] },
  { number: '06', title: 'IA y automatización', description: 'Inteligencia artificial aplicada donde produce una mejora operativa real.', items: ['Asistentes y agentes', 'Procesamiento documental', 'Análisis de datos', 'Reportes automáticos', 'Pipelines'] }
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { number: '01', title: 'Descubrimiento y evaluación técnica', description: 'Entendemos el problema, objetivos, usuarios, sistemas existentes y restricciones para definir el enfoque correcto.' },
  { number: '02', title: 'Arquitectura y diseño', description: 'Definimos experiencia, estructura, tecnologías, integraciones y una arquitectura escalable y mantenible.' },
  { number: '03', title: 'Desarrollo e integración', description: 'Construimos en etapas, conectamos los sistemas necesarios y realizamos entregas funcionales.' },
  { number: '04', title: 'Validación y calidad', description: 'Probamos funcionalidades, experiencia, accesibilidad, seguridad y comportamiento antes de producción.' },
  { number: '05', title: 'Lanzamiento y evolución', description: 'Ponemos la solución en producción, medimos su funcionamiento y acompañamos su evolución.' }
];

export const INDUSTRIES = ['Salud y seguros', 'Retail y bienes de consumo', 'Viajes y hotelería', 'Finanzas y fintech', 'Educación y edTech', 'Industrial y utilities', 'Bienes raíces y construcción', 'Logística', 'Ticketing', 'Hospitalidad y foodtech', 'Entretenimiento y medios'] as const;

export const DIFFERENTIATORS: readonly Differentiator[] = [
  { title: 'Arquitectura escalable', description: 'Construimos pensando en la evolución del producto y del negocio.' },
  { title: 'Código mantenible', description: 'Creamos bases técnicas claras, documentadas y preparadas para continuar creciendo.' },
  { title: 'Comunicación clara', description: 'Mantenemos visibilidad sobre decisiones, avances y próximos pasos.' },
  { title: 'Entrega progresiva', description: 'Validamos funcionalidades durante el proceso, sin esperar hasta el final.' }
];

export const FAQS: readonly Faq[] = [
  { question: '¿Qué servicios ofrece TrailSoft?', answer: 'TrailSoft desarrolla aplicaciones web y móviles, software a medida, MVP, integraciones, APIs y soluciones de inteligencia artificial y automatización para empresas.' },
  { question: '¿TrailSoft desarrolla software a medida?', answer: 'Sí. Diseñamos y desarrollamos software personalizado según las necesidades, procesos e integraciones de cada empresa, con foco en soluciones escalables y mantenibles.' },
  { question: '¿Pueden desarrollar un MVP desde cero?', answer: 'Sí. Acompañamos el proyecto desde la definición y validación de la idea hasta el diseño, desarrollo y puesta en producción de un MVP funcional.' },
  { question: '¿Pueden integrar sistemas existentes?', answer: 'Sí. Desarrollamos APIs, webhooks e integraciones para conectar sistemas internos, CRM, ERP, plataformas externas y servicios de terceros.' },
  { question: '¿TrailSoft desarrolla soluciones con inteligencia artificial?', answer: 'Sí. Integramos asistentes y agentes con IA, automatización de procesos, análisis de información, procesamiento de documentos y generación automática de reportes.' },
  { question: '¿Cómo comienza un proyecto con TrailSoft?', answer: 'Comenzamos con una etapa de descubrimiento para entender objetivos, necesidades y restricciones. Luego definimos la arquitectura, diseñamos la solución y avanzamos con desarrollo, pruebas y puesta en producción.' },
  { question: '¿Cuánto tarda un desarrollo a medida?', answer: 'Depende del alcance y la complejidad. Después de la etapa inicial de descubrimiento podemos definir funcionalidades, etapas y una estimación más precisa.' }
];
