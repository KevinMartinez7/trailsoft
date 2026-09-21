# PROMPT MAESTRO — DISEÑO Y DESARROLLO DE LA LANDING DE TRAILSOFT

Actuá simultáneamente como:

* Arquitecto de software senior con más de 10 años de experiencia.
* Desarrollador experto en Angular 20.
* Diseñador UI/UX especializado en productos tecnológicos B2B.
* Especialista en accesibilidad, SEO técnico, rendimiento web y diseño responsive.
* Director de arte digital capaz de crear una experiencia visual distintiva y coherente.

Tu misión es diseñar e implementar la landing oficial de **TrailSoft** en Angular 20.

No entregues únicamente una explicación, wireframe o propuesta. Analizá el repositorio, elaborá un plan breve y ejecutá la implementación completa, dejándola preparada para producción.

---

# 1. FUENTES OBLIGATORIAS

Antes de modificar código:

1. Inspeccioná completamente el proyecto existente.
2. Localizá y revisá el manual de marca de TrailSoft.
3. Identificá los archivos originales del logo y sus variantes.
4. Revisá cualquier diseño, captura o estructura existente de la landing.
5. Conservá cualquier implementación útil que ya exista.
6. Informá brevemente qué encontraste y qué vas a modificar.
7. Después del informe, comenzá la implementación sin detenerte a pedir confirmaciones innecesarias.

El manual de marca es la fuente visual principal.

Si existe una diferencia entre este prompt, una implementación anterior y el manual, prevalece el manual.

## Regla crítica sobre el logo

Usá exactamente el logo oficial proporcionado:

* No redibujar.
* No reinterpretar.
* No aproximar mediante CSS.
* No modificar proporciones.
* No cambiar tipografía.
* No cambiar el espaciado de `TRAILSOFT`.
* No alterar los nodos, recorridos ni terminaciones del isotipo.
* No aplicar sombras, deformaciones o gradientes que no estén contemplados en la identidad.
* No generar una versión alternativa mediante inteligencia artificial.

Si solamente está disponible dentro del PDF, extraelo sin modificarlo. Si no existe un recurso con calidad suficiente, dejá claramente preparada la ubicación del archivo y solicitá el original; nunca inventes uno nuevo.

---

# 2. OBJETIVO COMERCIAL

La landing debe posicionar a TrailSoft como una empresa de ingeniería y desarrollo de software capaz de transformar necesidades complejas en productos digitales claros, mantenibles y preparados para crecer.

TrailSoft no debe percibirse como:

* Una agencia de marketing.
* Una empresa que solamente diseña páginas web.
* Una plantilla tecnológica genérica.
* Una startup llena de frases vacías sobre inteligencia artificial.
* Una copia de otras software factories.

Debe percibirse como una empresa:

* Técnica.
* Confiable.
* Estratégica.
* Clara.
* Moderna.
* B2B.
* Capaz de acompañar un producto desde la idea hasta producción.
* Preparada para desarrollar soluciones reales y escalables.

Concepto rector:

**TrailSoft representa el recorrido que transforma una idea en una solución de software.**

Claim principal:

**Trazamos el camino. Construimos el software.**

Claim complementario del logo:

**Ideas que se convierten en soluciones.**

---

# 3. IDENTIDAD VISUAL

La experiencia digital debe respetar rigurosamente el manual.

## Paleta principal

* Azul TrailSoft: `#0D8BFF`
* Turquesa TrailSoft: `#34CFBE`
* Negro oficial: `#000000`

## Superficies digitales permitidas

Para evitar una página completamente plana, utilizar derivados oscuros coherentes:

* Fondo principal: `#05080D`
* Fondo alternativo: `#07111B`
* Superficie de tarjetas: `#0B1622`
* Superficie destacada: `#0D1B29`
* Bordes: `#172737`
* Texto principal: `#F5F7FA`
* Texto secundario: `#98A3AF`
* Texto tenue: `#667381`

Centralizá todos estos valores mediante variables CSS o design tokens. No disperses colores escritos manualmente por los componentes.

## Tipografías

* Sora: títulos, marca y encabezados.
* Inter: párrafos, navegación, formularios y elementos de interfaz.
* Cargarlas de manera optimizada y preferentemente local.
* Definir escalas fluidas con `clamp()`.
* Mantener longitudes de línea cómodas y jerarquías claras.

## Dirección visual

La landing debe ser principalmente oscura, elegante y tecnológica.

Usar como lenguaje visual:

* Caminos.
* Recorridos.
* Líneas de circuito.
* Nodos de conexión.
* Puntos de decisión.
* Progresión desde idea hasta producción.
* Grillas técnicas muy sutiles.
* Bordes finos.
* Profundidad mediante superficies oscuras.
* Azul y turquesa como señales funcionales.

Evitar:

* Estética gamer.
* Cyberpunk exagerado.
* Código Matrix.
* Robots, cerebros digitales o manos holográficas.
* Planetas, nubes de partículas y esferas 3D genéricas.
* Gradientes gigantes sin propósito.
* Exceso de resplandores.
* Mockups flotantes genéricos.
* Ilustraciones típicas producidas por IA.
* Cursores personalizados invasivos.
* Parallax excesivo.
* Carruseles innecesarios.
* Animaciones permanentes que distraigan.
* Tarjetas idénticas a las plantillas SaaS más comunes.

La web debe sentirse diseñada específicamente para TrailSoft.

---

# 4. EXPERIENCIA Y COMPOSICIÓN

Construí una experiencia visual sólida, con buen ritmo vertical, aire y jerarquía.

No conviertas toda la página en una sucesión de tarjetas iguales.

Alterná de manera equilibrada:

* Contenido editorial.
* Bloques de servicios.
* Diagramas de recorrido.
* Secciones con columnas.
* Timeline.
* Listados técnicos.
* Áreas de descanso visual.
* CTA destacados.
* Preguntas frecuentes.
* Formulario final.

Cada sección debe tener una función clara y aportar algo nuevo.

Utilizá un contenedor máximo consistente y un sistema de espaciado basado en múltiplos. El diseño debe conservar su calidad desde pantallas móviles pequeñas hasta monitores amplios.

---

# 5. ESTRUCTURA OBLIGATORIA

La landing debe tener el siguiente recorrido:

1. Header.
2. Hero.
3. Introducción y propuesta de valor.
4. Servicios.
5. Cómo construimos.
6. IA y automatización.
7. Industrias.
8. Diferenciales.
9. Preguntas frecuentes.
10. Formulario “Hablemos de tu proyecto”.
11. CTA final.
12. Footer.
13. Botón flotante de WhatsApp.

Podés mejorar el ritmo o combinar bloques relacionados, pero no eliminar contenido importante.

---

# 6. HEADER

Crear un header:

* Sticky.
* Elegante.
* De altura contenida.
* Fondo oscuro inicialmente integrado al hero.
* Con blur y borde inferior sutil después del scroll.
* Logo oficial exacto.
* Navegación mediante anclas.
* Estado activo de la sección actual.
* Navegación accesible por teclado.

Opciones:

* Servicios.
* Cómo trabajamos.
* Soluciones.
* Industrias.
* Preguntas frecuentes.
* Contacto.

CTA principal:

**Contanos tu proyecto**

En mobile:

* Menú accesible.
* Apertura y cierre suave.
* Bloqueo correcto del scroll.
* Cierre con Escape.
* Gestión del foco.
* Áreas táctiles de al menos 44 × 44 px.
* Sin desbordamientos horizontales.

---

# 7. HERO

El hero debe comunicar qué hace TrailSoft en menos de cinco segundos.

Contenido principal:

**TRAILSOFT**

# Trazamos el camino.

# Construimos el software.

Texto:

**Desarrollamos productos digitales, sistemas a medida e integraciones que transforman ideas y procesos en soluciones listas para operar, evolucionar y crecer.**

CTA principal:

**Contanos tu proyecto**

CTA secundario:

**Conocé nuestros servicios**

El CTA “Contanos tu proyecto” debe desplazarse con suavidad hasta el formulario de contacto, respetando `prefers-reduced-motion`.

No utilizar fotografías genéricas de programadores.

Crear una composición original basada en el “Trail System”:

* Idea.
* Arquitectura.
* Desarrollo.
* Integración.
* Calidad.
* Producción.

La composición puede mostrar una línea de circuito que recorre nodos y avanza hacia producción. Debe estar construida con SVG, CSS o elementos nativos controlables, no con una imagen genérica.

El hero debe verse excelente en desktop, tablet y mobile. En mobile, el gráfico debe reordenarse sin competir con el mensaje ni reducir excesivamente el texto.

---

# 8. PROPUESTA DE VALOR

Incluir un bloque editorial que explique el posicionamiento:

Título sugerido:

**Convertimos necesidades complejas en software preparado para crecer.**

Texto:

**Trabajamos desde la comprensión del problema hasta la puesta en producción, combinando estrategia, arquitectura, diseño y desarrollo para construir soluciones digitales claras, mantenibles y alineadas con cada negocio.**

Esta sección debe ayudar a comprender que TrailSoft desarrolla productos y sistemas, no solamente sitios web.

---

# 9. SERVICIOS

Título:

**Lo que construimos**

Introducción:

**Diseñamos y desarrollamos soluciones digitales adaptadas a los procesos, objetivos y desafíos de cada organización.**

Servicios obligatorios:

## 01. Aplicaciones web

Plataformas digitales diseñadas para operar desde cualquier navegador.

Incluir:

* Dashboards.
* SaaS.
* Marketplaces.
* Herramientas internas.
* Plataformas web.

## 02. Aplicaciones móviles

Aplicaciones iOS y Android orientadas a clientes, equipos y operaciones.

Incluir:

* Apps para clientes.
* Apps internas.
* Soluciones multiplataforma.
* Adaptación de sistemas web a mobile.

## 03. Software a medida

Sistemas construidos alrededor de los procesos reales de cada organización.

Incluir:

* ERP y CRM personalizados.
* Sistemas de gestión.
* Reservas y turnos.
* Membresías.
* Automatización de procesos.

## 04. MVP y productos digitales

Transformación de ideas en productos funcionales que pueden validarse y evolucionar.

Incluir:

* Desarrollo de MVP.
* Prototipos funcionales.
* Validación de ideas.
* Desarrollo desde cero.
* Evolución del MVP hacia un producto completo.

## 05. Integraciones y APIs

Conexión de plataformas y eliminación de procesos aislados.

Incluir:

* APIs.
* Webhooks.
* CRM.
* ERP.
* Plataformas externas.
* Servicios backend.
* Sincronización de datos.

## 06. IA y automatización

Integración de inteligencia artificial en procesos donde pueda generar una mejora operativa real.

Incluir:

* Chatbots y asistentes o agentes con IA.
* Automatización de tareas y flujos.
* Procesamiento de documentos.
* Análisis de datos.
* Flujos de decisión automatizados.
* Reportes automáticos.
* Integración de IA en sistemas existentes.
* Pipelines de automatización.

No llenar las tarjetas con párrafos extensos. Usar descripción breve, palabras clave y jerarquías escaneables.

Las interacciones hover deben ser discretas:

* Elevación máxima de pocos píxeles.
* Cambio sutil de borde.
* Activación de algún nodo o recorrido.
* Sin rotaciones ni efectos llamativos.

En dispositivos táctiles la información debe estar disponible sin depender del hover.

---

# 10. CÓMO CONSTRUIMOS

Esta sección es una de las más importantes.

Título superior:

**CÓMO CONSTRUIMOS**

Título principal:

**De la idea a producción.**

Texto:

**Un proceso claro para reducir incertidumbre, validar decisiones y construir productos preparados para crecer.**

Etapas:

## 01. Descubrimiento y evaluación técnica

Entendemos el problema, los objetivos, usuarios, sistemas existentes, restricciones y requerimientos para definir el enfoque correcto.

## 02. Arquitectura y diseño

Definimos experiencia, estructura, tecnologías, integraciones y una arquitectura escalable y mantenible.

## 03. Desarrollo e integración

Construimos el producto en etapas, conectamos los sistemas necesarios y realizamos entregas funcionales.

## 04. Validación y calidad

Probamos funcionalidades, experiencia, accesibilidad, seguridad y comportamiento antes de producción.

## 05. Lanzamiento y evolución

Ponemos la solución en producción, medimos su funcionamiento y acompañamos su evolución.

En desktop:

* El bloque introductorio puede quedar sticky.
* Las etapas avanzan en la columna derecha.
* Una línea de circuito debe progresar visualmente con el scroll.

En mobile:

* Convertirlo en una timeline vertical clara.
* No utilizar sticky si perjudica la navegación.
* Mantener todos los textos legibles.
* No provocar saltos de layout.

La animación debe explicar el avance del proceso. No debe ser decorativa.

---

# 11. IA Y AUTOMATIZACIÓN

Dar a esta capacidad una sección específica.

Etiqueta:

**IA APLICADA**

Título:

**Automatización que trabaja con tus sistemas.**

Texto:

**Integramos inteligencia artificial en procesos reales para reducir tareas manuales, conectar información y acelerar operaciones.**

Crear un diagrama responsive:

Entradas:

* Documentos.
* Correos.
* CRM.
* ERP.
* Bases de datos.

Procesamiento:

* TrailSoft AI.
* Reglas.
* Clasificación.
* Agentes.
* Automatizaciones.

Resultados:

* Datos estructurados.
* Acciones.
* Alertas.
* Reportes.
* Decisiones asistidas.

No representar la IA mediante cerebros, robots o gráficos genéricos. Utilizar el lenguaje de nodos, conexiones y recorridos de TrailSoft.

---

# 12. INDUSTRIAS

Etiqueta:

**INDUSTRIAS EN LAS QUE TRABAJAMOS**

Título:

**Tecnología que se adapta a cada vertical.**

Texto:

**Soluciones digitales para industrias donde la tecnología es fundamental para las operaciones.**

Mostrar:

* Salud y seguros.
* Retail y bienes de consumo.
* Viajes y hotelería.
* Finanzas y fintech.
* Educación y edTech.
* Industrial y utilities.
* Bienes raíces y construcción.
* Logística.
* Ticketing.
* Hospitalidad y foodtech.
* Entretenimiento y medios.

No incluir:

**Marketing y agencias.**

No inventar experiencia, estadísticas o proyectos no confirmados. Si no existen casos comprobables, utilizar expresiones como “soluciones para” en lugar de afirmar años de experiencia en cada industria.

Usar iconografía lineal coherente con el manual.

---

# 13. DIFERENCIALES

Título:

**Pensado para producción, no solamente para una demo.**

Diferenciales:

## Arquitectura escalable

Construimos pensando en la evolución del producto y del negocio.

## Código mantenible

Creamos bases técnicas claras, documentadas y preparadas para continuar creciendo.

## Comunicación clara

Mantenemos visibilidad sobre decisiones, avances y próximos pasos.

## Entrega progresiva

Validamos funcionalidades durante el proceso, sin esperar hasta el final.

No utilizar números, clientes, testimonios, certificaciones o métricas inventadas.

---

# 14. PREGUNTAS FRECUENTES

Crear una sección sencilla, visible y eficaz.

No hacer un bloque excesivamente decorado.

Título:

**Desarrollo de software para empresas**

Introducción:

**Respuestas breves sobre nuestros servicios, procesos y soluciones tecnológicas.**

Preguntas:

## ¿Qué servicios ofrece TrailSoft?

TrailSoft desarrolla aplicaciones web y móviles, software a medida, MVP, integraciones, APIs y soluciones de inteligencia artificial y automatización para empresas.

## ¿TrailSoft desarrolla software a medida?

Sí. Diseñamos y desarrollamos software personalizado según las necesidades, procesos e integraciones de cada empresa, con foco en soluciones escalables y mantenibles.

## ¿Pueden desarrollar un MVP desde cero?

Sí. Acompañamos el proyecto desde la definición y validación de la idea hasta el diseño, desarrollo y puesta en producción de un MVP funcional.

## ¿Pueden integrar sistemas existentes?

Sí. Desarrollamos APIs, webhooks e integraciones para conectar sistemas internos, CRM, ERP, plataformas externas y servicios de terceros.

## ¿TrailSoft desarrolla soluciones con inteligencia artificial?

Sí. Integramos asistentes y agentes con IA, automatización de procesos, análisis de información, procesamiento de documentos y generación automática de reportes.

## ¿Cómo comienza un proyecto con TrailSoft?

Comenzamos con una etapa de descubrimiento para entender objetivos, necesidades y restricciones. Luego definimos la arquitectura, diseñamos la solución y avanzamos con desarrollo, pruebas y puesta en producción.

## ¿Cuánto tarda un desarrollo a medida?

Depende del alcance y la complejidad. Después de la etapa inicial de descubrimiento podemos definir funcionalidades, etapas y una estimación más precisa.

Las respuestas deben estar presentes en el HTML generado.

Se puede utilizar acordeón accesible, pero:

* Debe funcionar con teclado.
* Debe indicar correctamente su estado.
* No debe depender de JavaScript para que el contenido sea indexable.
* No debe ocultar todas las respuestas si eso perjudica la experiencia.
* En desktop puede evaluarse dejar varias respuestas visibles.

---

# 15. FORMULARIO “HABLEMOS DE TU PROYECTO”

Crear una sección visualmente importante, no un formulario perdido al final de la página.

Etiqueta:

**HABLEMOS DE TU PROYECTO**

Título:

**Todo producto empieza con un primer paso.**

Texto:

**Contanos qué querés construir y analicemos juntos el camino para llevarlo a producción.**

Campos:

* Nombre.
* Empresa, opcional.
* Correo electrónico.
* Teléfono o WhatsApp, opcional.
* Tipo de proyecto.
* Mensaje o descripción.
* Aceptación de política de privacidad si corresponde.

Tipos de proyecto:

* Aplicación web.
* Aplicación móvil.
* Software a medida.
* MVP.
* Integración o API.
* IA y automatización.
* Otro.

Usar Reactive Forms tipados.

Implementar:

* Etiquetas visibles.
* Mensajes de error comprensibles.
* Validación accesible.
* Estados de envío.
* Estado exitoso.
* Estado de error.
* Prevención de doble envío.
* Campo honeypot antispam.
* Autocompletado adecuado.
* Asociación mediante `label`, `for`, `aria-describedby` y regiones de estado.

El envío debe quedar conectado mediante un servicio desacoplado.

Si todavía no existe proveedor de correo o endpoint:

* Crear `ContactService`.
* Definir el endpoint mediante configuración o environment.
* No inventar credenciales.
* No dejar una simulación engañosa de envío exitoso.
* Documentar claramente cómo conectar el proveedor.
* Mantener la UI completamente preparada.

Todos los botones “Contanos tu proyecto” o “Hablemos de tu proyecto” deben llevar a esta sección.

---

# 16. WHATSAPP FLOTANTE

Agregar un botón flotante de WhatsApp:

* Integrado visualmente a la marca.
* Azul o turquesa según contraste.
* Ícono reconocible.
* Tooltip accesible.
* Texto accesible para lectores de pantalla.
* Área táctil mínima de 44 × 44 px.
* Separación correcta de los bordes y safe areas.
* Sin tapar contenido, botones, formularios ni navegación.
* Posición adaptada en mobile.
* Aparición sutil después de cierto desplazamiento.
* Sin animación constante ni rebotes repetitivos.

El número debe provenir de configuración. No inventarlo.

El mensaje inicial puede ser configurable:

**Hola, quiero conversar sobre un proyecto de software con TrailSoft.**

Abrir el enlace de manera segura.

---

# 17. CTA FINAL Y FOOTER

CTA:

# Todo producto empieza con un primer paso.

**Contanos qué querés construir y analicemos juntos el camino para llevarlo a producción.**

Botón:

**Hablemos de tu proyecto**

Footer:

* Logo oficial.
* Claim.
* Navegación.
* Correo configurable.
* LinkedIn si existe.
* Política de privacidad.
* Aviso legal si corresponde.
* Copyright dinámico.
* Enlace para volver arriba.

No inventar redes sociales ni datos de contacto.

---

# 18. ANIMACIONES CON SENTIDO

Las animaciones deben reforzar la idea de recorrido y evolución.

Implementar solamente animaciones que cumplan una función:

## Hero

La línea del recorrido puede dibujarse progresivamente desde “Idea” hasta “Producción”.

## Servicios

Los nodos pueden activarse suavemente al entrar en viewport o al interactuar con una tarjeta.

## Proceso

La línea avanza conforme el usuario recorre las etapas.

## IA

Las conexiones pueden mostrar un flujo discreto desde entradas hacia resultados.

## CTA

El recorrido puede terminar visualmente en el formulario o CTA final.

Reglas:

* Usar principalmente `transform`, `opacity` y animaciones SVG.
* Evitar animaciones que provoquen layout shift.
* Evitar movimiento constante.
* No animar todos los elementos.
* No utilizar animaciones únicamente para “hacerla moderna”.
* Respetar `prefers-reduced-motion`.
* Desactivar o simplificar efectos en dispositivos con menor capacidad.
* No incorporar una librería pesada si CSS, SVG e IntersectionObserver son suficientes.
* Si se utiliza una dependencia, justificarla.
* No bloquear el contenido mientras carga una animación.
* No utilizar un loader largo o artificial.

La experiencia debe seguir siendo completa con JavaScript limitado o movimiento reducido.

---

# 19. RESPONSIVE DESIGN

La web debe adaptarse de manera ejemplar, no simplemente “entrar” en mobile.

Diseñar y comprobar como mínimo:

* 320 px.
* 360 px.
* 390 px.
* 430 px.
* 768 px.
* 1024 px.
* 1280 px.
* 1440 px.
* 1920 px.

Requisitos:

* Mobile first.
* Sin scroll horizontal.
* Sin textos cortados.
* Sin botones fuera de pantalla.
* Sin nodos o líneas desconectados.
* Sin elementos absolutos que fallen al cambiar el viewport.
* Imágenes y SVG fluidos.
* Grillas que se adapten según el contenido.
* Espaciado proporcional.
* Tamaños táctiles correctos.
* Uso razonable de `clamp()`, `min()`, `max()` y container queries cuando aporten valor.
* Contenedor central consistente.
* Navegación mobile plenamente funcional.
* Formularios cómodos de completar con una mano.
* Secciones sticky solamente donde sean apropiadas.
* Safe areas consideradas para dispositivos móviles.

No diseñar desktop y después comprimirlo. Cada rango debe tener una composición deliberada.

---

# 20. ACCESIBILIDAD

Apuntar como mínimo a WCAG 2.2 AA.

Implementar:

* HTML semántico.
* Un solo `h1`.
* Jerarquía correcta de encabezados.
* Navegación por teclado.
* Skip link.
* Foco visible.
* Contraste suficiente.
* Etiquetas de formularios.
* Mensajes de error accesibles.
* Botones reales para acciones.
* Enlaces reales para navegación.
* Uso correcto de ARIA solamente cuando sea necesario.
* Menú mobile accesible.
* Acordeón accesible.
* Soporte para `prefers-reduced-motion`.
* Soporte razonable para zoom al 200%.
* Iconos decorativos ocultos para lectores de pantalla.
* Textos alternativos útiles.
* Sin depender exclusivamente del color para transmitir estados.

No sacrificar accesibilidad para mantener una animación.

---

# 21. SEO

La landing debe tener una base SEO excelente.

Objetivos semánticos principales:

* Desarrollo de software a medida.
* Desarrollo de aplicaciones web.
* Desarrollo de aplicaciones móviles.
* Desarrollo de MVP.
* Integración de sistemas y APIs.
* Automatización de procesos.
* Inteligencia artificial para empresas.
* Soluciones de software para empresas.

Aplicarlos de forma natural. No repetir palabras clave artificialmente.

Implementar:

* Renderizado SSR o prerender/SSG mediante Angular 20.
* Hydration correctamente configurada.
* `<title>` relevante.
* Meta description.
* Canonical configurable.
* Open Graph.
* Twitter Cards.
* `robots.txt`.
* `sitemap.xml`.
* URLs limpias.
* HTML semántico.
* Encabezados bien jerarquizados.
* Contenido crítico presente en el HTML inicial.
* Configuración de idioma `es`.
* Favicons.
* Manifest si aporta valor.
* Datos estructurados JSON-LD.

Datos estructurados posibles:

* `Organization`.
* `ProfessionalService` o tipo empresarial apropiado.
* `WebSite`.
* `Service`.
* `FAQPage`.

No inventar:

* Dirección.
* Teléfono.
* Fundadores.
* Redes.
* Opiniones.
* Calificaciones.
* Años de experiencia.
* Premios.
* Clientes.
* Estadísticas.
* Ubicación.

Usar configuración para la información todavía no confirmada.

El marcado FAQ debe ser válido aunque Google no garantice mostrar un resultado enriquecido.

---

# 22. RENDIMIENTO

Objetivo:

* Lighthouse Performance superior a 90.
* Accessibility superior a 95.
* Best Practices superior a 95.
* SEO superior a 95.

Optimizar:

* LCP.
* CLS.
* INP.
* Tamaño inicial del bundle.
* Carga de fuentes.
* Imágenes.
* SVG.
* JavaScript no esencial.
* Animaciones.
* Hydration.
* CSS crítico.

Utilizar:

* `NgOptimizedImage` para imágenes rasterizadas.
* Dimensiones explícitas.
* Lazy loading fuera del primer viewport.
* SVG optimizados.
* Fuentes autohospedadas si es posible.
* `font-display` adecuado.
* Preload solamente para recursos realmente críticos.
* Componentes diferidos cuando tenga sentido.
* Sin dependencias visuales pesadas innecesarias.
* Sin imágenes gigantes usadas como fondo.
* Sin videos automáticos pesados.

---

# 23. ARQUITECTURA ANGULAR 20

Mantener Angular 20. No degradar la versión.

Usar:

* Standalone Components.
* TypeScript estricto.
* Signals para estados locales cuando corresponda.
* Reactive Forms tipados.
* Lazy loading si se agregan rutas.
* SSR o prerender.
* Hydration.
* Change detection optimizada.
* Componentes pequeños y responsables.
* Servicios desacoplados.
* Configuración centralizada.
* Datos separados de la presentación.

Estructura sugerida:

```text
src/
  app/
    core/
      config/
      seo/
      services/
      layout/
      models/

    shared/
      ui/
        button/
        section-heading/
        icon/
        form-field/
      directives/
      utilities/

    features/
      home/
        pages/
          home-page/
        sections/
          hero/
          value-proposition/
          services/
          process/
          ai-automation/
          industries/
          differentiators/
          faq/
          contact/
          final-cta/

    app.component.ts
    app.config.ts
    app.routes.ts

  styles/
    _tokens.scss
    _typography.scss
    _layout.scss
    _animations.scss
    _utilities.scss
    styles.scss

public/
  brand/
  icons/
  images/
  robots.txt
  sitemap.xml
```

Podés adaptar esta estructura si el repositorio ya tiene una arquitectura sólida, pero respetá estos principios:

* Nada de un único componente gigante.
* Nada de componentes creados sin responsabilidad clara.
* Nada de lógica de negocio en templates.
* Nada de datos duplicados en varios componentes.
* Nada de `any`.
* Nada de estilos globales improvisados.
* Nada de valores mágicos repetidos.
* Nada de suscripciones sin limpiar.
* Nada de manipulación directa innecesaria del DOM.
* Nada de dependencias instaladas solo por comodidad.

Crear modelos tipados para:

* Servicios.
* Etapas.
* Industrias.
* Diferenciales.
* Preguntas frecuentes.
* Datos de contacto.
* Navegación.

Mantener el contenido editable desde estructuras de datos centralizadas, sin convertirlo prematuramente en un CMS.

---

# 24. CSS Y SISTEMA DE DISEÑO

Construir un pequeño sistema de diseño interno.

Definir tokens para:

* Colores.
* Fondos.
* Superficies.
* Bordes.
* Tipografías.
* Escala tipográfica.
* Espaciado.
* Radios.
* Sombras.
* Duraciones.
* Curvas de animación.
* Ancho máximo.
* Altura del header.
* Z-index.
* Breakpoints o container queries.

Los componentes deben consumir estos tokens.

No mezclar diferentes criterios visuales entre secciones.

No utilizar Tailwind, Bootstrap, Material u otra librería visual a menos que ya formen parte del proyecto o exista una justificación técnica clara. La identidad de TrailSoft debe construirse de manera propia.

Si el proyecto ya utiliza Tailwind correctamente, conservarlo y trasladar los tokens de marca a su configuración sin mezclar metodologías de manera caótica.

---

# 25. UX Y MICROINTERACCIONES

Implementar:

* Scroll suave con alternativa para movimiento reducido.
* Navegación por anclas con compensación del header.
* Estado activo en la navegación.
* Feedback inmediato en botones.
* Estados hover, focus, active y disabled.
* Formularios claros.
* Errores cerca del campo.
* Confirmación de envío.
* Navegación mobile predecible.
* FAQ fácil de escanear.
* CTA visibles sin saturar la página.
* Enlaces que indiquen correctamente su comportamiento.
* Estados de carga solo donde sean reales.
* Recuperación ante errores.

No utilizar mensajes falsos de éxito.

---

# 26. CONTENIDO Y TONO

El tono debe ser:

* Profesional.
* Claro.
* Técnico sin ser inaccesible.
* Seguro sin exagerar.
* Directo.
* Estratégico.
* Humano.
* En español neutro y natural.

Evitar:

* “Revolucionamos el futuro”.
* “Llevamos tu negocio al siguiente nivel”.
* “Soluciones disruptivas”.
* “Tecnología de vanguardia” sin explicación.
* “Potenciamos tu empresa” como frase vacía.
* Exceso de anglicismos.
* Párrafos generados para rellenar.
* Afirmaciones no demostrables.

No inventar testimonios, estadísticas, clientes, casos de éxito ni datos empresariales.

---

# 27. TESTS Y VERIFICACIÓN

Antes de considerar terminado el trabajo:

1. Ejecutar build de producción.
2. Ejecutar tests.
3. Corregir errores TypeScript.
4. Corregir errores de compilación SSR.
5. Verificar que no existan errores en consola.
6. Probar navegación mediante teclado.
7. Probar menú mobile.
8. Probar FAQ.
9. Probar validaciones del formulario.
10. Probar el comportamiento sin endpoint configurado.
11. Probar enlaces internos.
12. Revisar metadatos.
13. Revisar JSON-LD.
14. Revisar `robots.txt`.
15. Revisar `sitemap.xml`.
16. Revisar imágenes y texto alternativo.
17. Revisar movimiento reducido.
18. Revisar visualmente todos los tamaños definidos.
19. Confirmar que no exista scroll horizontal.
20. Confirmar que el logo oficial no haya sido modificado.

Agregar pruebas unitarias útiles como mínimo para:

* FAQ.
* Menú responsive.
* Navegación por anclas.
* Formulario.
* Servicio de contacto.
* Estados de validación.
* Configuración SEO esencial.

No crear tests vacíos que solamente comprueben que el componente existe.

---

# 28. CRITERIOS DE ACEPTACIÓN

El trabajo está terminado solamente si:

* La web utiliza Angular 20.
* La marca respeta rigurosamente el manual.
* El logo oficial se utiliza sin modificaciones.
* La landing no parece una plantilla genérica ni una web creada por IA.
* La identidad del recorrido aparece de forma coherente.
* Las animaciones ayudan a comprender.
* La navegación funciona con teclado.
* El responsive está resuelto en todos los rangos.
* No existe scroll horizontal.
* El contenido tiene buena jerarquía.
* El formulario está correctamente validado.
* WhatsApp utiliza configuración real.
* Los CTA llevan al formulario.
* La sección de industrias no incluye “Marketing y agencias”.
* El FAQ está presente e indexable.
* SEO técnico está implementado.
* SSR o prerender funciona.
* El build de producción finaliza correctamente.
* La arquitectura es clara y mantenible.
* No existen datos comerciales inventados.
* No existen errores en consola.
* El rendimiento es adecuado.
* La experiencia mantiene calidad visual en mobile, tablet, notebook y monitor amplio.

---

# 29. ENTREGA FINAL

Al finalizar, entregar:

1. Resumen de lo implementado.
2. Arquitectura final.
3. Componentes creados o modificados.
4. Decisiones de diseño importantes.
5. Animaciones implementadas y su propósito.
6. Estrategia responsive.
7. SEO implementado.
8. Accesibilidad implementada.
9. Configuraciones pendientes:

   * Dominio.
   * Correo receptor.
   * Endpoint del formulario.
   * Número de WhatsApp.
   * Redes sociales.
10. Resultado de build y tests.
11. Instrucciones para ejecutar localmente.
12. Instrucciones para desplegar.
13. Riesgos o pendientes reales, sin ocultarlos.

No finalices con una explicación teórica. Implementá, verificá y entregá el proyecto funcionando.

La calidad esperada es la de una landing diseñada y construida por un equipo senior de producto, diseño UX/UI, arquitectura frontend, SEO y accesibilidad.
