import { Differentiator, Faq, NavItem, ProcessStep, Service } from '../models/content.models';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Servicios', href: '#servicios' }, { label: 'Nuestro proceso', href: '#proceso' },
  { label: 'IA para tu negocio', href: '#automatizacion' }, { label: 'Industrias', href: '#industrias' },
  { label: 'Preguntas frecuentes', href: '#preguntas' }, { label: 'Contacto', href: '#contacto' }
];

export const SERVICES: readonly Service[] = [
  { number: '01', title: 'Aplicaciones web', description: 'Plataformas rápidas, seguras y escalables accesibles desde cualquier dispositivo.', items: ['Dashboards', 'SaaS', 'Marketplaces', 'Herramientas internas', 'Plataformas web'] },
  { number: '02', title: 'Aplicaciones móviles', description: 'Desarrollos para iOS y Android enfocados en experiencia de tus usuarios, rendimiento y crecimiento.', items: ['Apps para clientes', 'Apps internas', 'Soluciones multiplataforma', 'Web a mobile'] },
  { number: '03', title: 'Software a medida', description: 'Sistemas que centralizan y mejoran la operación y gestión de tu empresa.', items: ['ERP y CRM personalizados', 'Sistemas de gestión', 'Reservas y turnos', 'Membresías', 'Automatización'] },
  { number: '04', title: 'MVP y prototipos', description: 'Convertimos tu idea de emprendimiento en una primera versión que puedas mostrar, probar y validar con clientes reales antes de escalar.', items: ['Desarrollo de MVP', 'Prototipos funcionales', 'Validación', 'Desarrollo desde cero', 'Evolución de producto'] },
  { number: '05', title: 'Integraciones y APIs', description: 'Conectamos tu sistema con servicios externos para intercambiar datos y utilizar funcionalidades de otras plataformas.', items: ['Webhooks', 'CRM y ERP', 'Servicios backend', 'Sincronización de datos'] },
  { number: '06', title: 'IA y automatizaciones', description: 'Automatizamos tareas y procesos para ahorrar tiempo, reducir trabajo manual y mejorar la eficiencia de tu negocio.', items: ['Asistentes y agentes', 'Procesamiento documental', 'Análisis de datos', 'Reportes automáticos', 'Pipelines'] }
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { number: '01', title: 'Descubrimiento y Planificación', description: 'Definimos juntos objetivos, requerimientos y alcance del proyecto para asegurar claridad desde el principio.' },
  { number: '02', title: 'Diseño y Prototipado', description: 'Creamos prototipos funcionales para que puedas realizar pruebas, darnos tu feedback y realizar ajustes.' },
  { number: '03', title: 'Desarrollo', description: 'Construimos tu producto aplicando metodologías ágiles que nos permiten mostrarte los desarrollos incrementales al final de cada ciclo.' },
  { number: '04', title: 'Pruebas y Calidad', description: 'Revisamos cada detalle para corregir posibles errores y que tu software sea funcional, seguro y confiable.' },
  { number: '05', title: 'Lanzamiento y Soporte Continuo', description: 'Ponemos tu software en funcionamiento y ofrecemos soporte post-implementación para asegurar siempre esté operando correctamente.' }
];

export const INDUSTRIES = ['Salud y seguros', 'Bienes y servicios', 'Viajes y hotelería', 'Finanzas', 'Educación', 'Industrial', 'Bienes raíces y construcción', 'Logística', 'Recursos Humanos', 'Legal', 'Gastronomía', 'Transporte'] as const;

export const DIFFERENTIATORS: readonly Differentiator[] = [
  { title: 'Comunicación clara y constante', description: 'Te mantenemos al tanto de cada avance sin modismos técnicos complejos. Respuestas rápidas e indicaciones claras en cada etapa.' },
  { title: 'Código sólido y escalable', description: 'Desarrollamos software bajo estándares de calidad exigentes, pensado para rendir bien hoy y crecer sin problemas mañana.' },
  { title: 'Soporte postventa', description: 'Nuestro trabajo no termina en la entrega. Te respaldamos con soporte y mantenimiento continuo para asegurar el éxito de tu producto.' }
];

export const FAQS: readonly Faq[] = [
  { question: '¿Qué tipo de solución puede ayudar a mi negocio?', answer: 'En la primera conversación entendemos tu situación y definimos juntos la mejor solución. Podemos ayudarte a optimizar tus operaciones, lanzar una idea, conectar herramientas o automatizar tareas, entre otras cosas.' },
  { question: '¿Ofrecen mantenimiento y mejoras a sistemas ya existentes?', answer: 'Sí, tomamos tu sistema que ya está en operación, realizamos mantenimiento, incorporamos nuevas funcionalidades, corregimos errores y adaptamos a las necesidades actuales de tu negocio.' },
  { question: 'Tengo una idea de negocio, ¿pueden convertirla en algo real?', answer: 'Por supuesto. Diseñamos y desarrollamos un MVP (Producto Mínimo Viable): una primera versión funcional de tu aplicación. Es la estrategia más rápida y económica porque te permite validar tu idea con usuarios reales antes de invertir en una app completa.' },
  { question: '¿Cómo implementan inteligencia artificial en mi empresa?', answer: 'Analizamos tus procesos, identificamos qué tareas consumen más tiempo y diseñamos agentes de IA y automatizaciones 24/7 para que tu equipo se enfoque en actividades de mayor valor.' },
  { question: '¿Necesito saber de tecnología para trabajar con TrailSoft?', answer: 'No. Nosotros traducimos lo técnico a un lenguaje simple y te guiamos en cada decisión. Vos aportás el conocimiento de tu negocio y juntos definimos la mejor solución.' },
  { question: '¿Cómo empieza un proyecto con ustedes?', answer: 'Comenzamos con una charla breve en la que conocemos tus requerimientos, objetivos y el resultado que esperás. Después te proponemos un camino claro para trabajar.' },
  { question: '¿Cuánto tarda una solución?', answer: 'Depende del objetivo y del alcance: desde unas pocas semanas para proyectos simples hasta un par de meses para sistemas complejos. Tras la etapa de descubrimiento, establecemos etapas y te damos un tiempo estimado realista.' }
];
