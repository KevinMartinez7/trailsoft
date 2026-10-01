import { Differentiator, Faq, NavItem, ProcessStep, Service } from '../models/content.models';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Servicios', href: '#servicios' }, { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'IA para tu negocio', href: '#automatizacion' }, { label: 'Industrias', href: '#industrias' },
  { label: 'Preguntas frecuentes', href: '#preguntas' }, { label: 'Contacto', href: '#contacto' }
];

export const SERVICES: readonly Service[] = [
  { number: '01', title: 'Web para hacer crecer tu negocio', description: 'Una presencia digital clara para que tus clientes te encuentren, confíen y elijan.', items: ['Más consultas', 'Más ventas', 'Atención simple', 'Operaciones', 'Resultados'] },
  { number: '02', title: 'Apps que tus clientes disfrutan', description: 'Llevá tu negocio al bolsillo de tus clientes y equipos con una experiencia simple de usar.', items: ['Experiencias móviles', 'Reservas', 'Notificaciones', 'Clientes conectados', 'Equipos ágiles'] },
  { number: '03', title: 'Herramientas hechas para vos', description: 'Ordená tu forma de trabajar y dejá atrás las tareas que te hacen perder tiempo.', items: ['Procesos claros', 'Gestión simple', 'Turnos y reservas', 'Información centralizada', 'Menos tareas manuales'] },
  { number: '04', title: 'Tu idea, lista para salir', description: 'Convertí una idea en una primera versión que puedas mostrar, probar y mejorar con clientes reales.', items: ['Idea ordenada', 'Prototipo', 'Primera versión', 'Opiniones reales', 'Próximo paso'] },
  { number: '05', title: 'Todo conectado, sin esfuerzo', description: 'Hacé que tus herramientas compartan información y recuperá tiempo para enfocarte en crecer.', items: ['Tus herramientas', 'Información al día', 'Menos errores', 'Procesos ágiles', 'Más control'] },
  { number: '06', title: 'Más tiempo para lo importante', description: 'Usá IA y automatización para resolver lo repetitivo y liberar a tu equipo para lo que genera valor.', items: ['Asistentes', 'Tareas automáticas', 'Información útil', 'Respuestas rápidas', 'Mejores decisiones'] }
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { number: '01', title: 'Empezamos por escucharte', description: 'Entendemos qué querés lograr, dónde se traba tu operación y qué necesita tu cliente.' },
  { number: '02', title: 'Dibujamos el camino', description: 'Convertimos tus objetivos en una propuesta clara, con prioridades y próximos pasos concretos.' },
  { number: '03', title: 'Construimos contigo', description: 'Avanzamos por etapas para que veas resultados, puedas opinar y tomemos decisiones juntos.' },
  { number: '04', title: 'Probamos antes de lanzar', description: 'Validamos la experiencia y el funcionamiento para que llegues al lanzamiento con confianza.' },
  { number: '05', title: 'Te acompañamos a crecer', description: 'Ponemos tu solución en marcha y seguimos cerca para mejorarla cuando tu negocio lo necesite.' }
];

export const INDUSTRIES = ['Salud y seguros', 'Retail y bienes de consumo', 'Viajes y hotelería', 'Finanzas y fintech', 'Educación y edTech', 'Industrial y utilities', 'Bienes raíces y construcción', 'Logística', 'Recursos Humanos', 'Legal', 'Gastronomía'] as const;

export const DIFFERENTIATORS: readonly Differentiator[] = [
  { title: 'Claridad desde el primer día', description: 'Te explicamos cada decisión en un lenguaje simple para que avances con seguridad.' },
  { title: 'Una base que acompaña tu crecimiento', description: 'Construimos pensando en lo que necesitás hoy y en todo lo que podés lograr mañana.' },
  { title: 'Siempre sabés qué sigue', description: 'Mantenemos una comunicación cercana para que tengas visibilidad de cada avance.' },
  { title: 'Resultados visibles por etapas', description: 'Validás el progreso durante el camino y empezás a obtener valor antes del lanzamiento final.' }
];

export const FAQS: readonly Faq[] = [
  { question: '¿Qué tipo de solución puede ayudar a mi negocio?', answer: 'Podemos ayudarte a mejorar una operación, crear un canal digital, lanzar una idea, conectar herramientas o automatizar tareas. En la primera conversación entendemos tu situación y te orientamos hacia el camino más conveniente.' },
  { question: '¿Trabajan con empresas que ya tienen sistemas?', answer: 'Sí. Nos ocupamos de conectar y mejorar las herramientas que ya usás para que la información fluya y tu equipo pueda trabajar con menos fricción.' },
  { question: 'Tengo una idea, ¿pueden ayudarme a convertirla en algo real?', answer: 'Sí. Te acompañamos a ordenar la idea, definir una primera versión, probarla con usuarios y decidir con información cómo seguir creciendo.' },
  { question: '¿Pueden automatizar tareas de mi equipo?', answer: 'Sí. Analizamos qué tareas consumen más tiempo y diseñamos automatizaciones e inteligencia artificial para que tu equipo se enfoque en actividades de mayor valor.' },
  { question: '¿Necesito saber de tecnología para trabajar con TrailSoft?', answer: 'No. Nosotros traducimos la parte técnica y te guiamos en cada decisión. Vos aportás el conocimiento de tu negocio y juntos definimos la mejor solución.' },
  { question: '¿Cómo empieza un proyecto con ustedes?', answer: 'Empieza con una charla breve y sin compromiso. Queremos conocer tu desafío, tus objetivos y el resultado que esperás. Después te proponemos un camino claro para avanzar.' },
  { question: '¿Cuánto tarda una solución?', answer: 'Depende del objetivo y del alcance. Luego de conocerte podemos separar el proyecto en etapas, priorizar lo importante y darte una estimación realista.' }
];
