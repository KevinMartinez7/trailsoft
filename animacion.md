# Implementar animación “Del código a producción” en el hero de TrailSoft

Actuá como un desarrollador frontend senior especializado en Angular 20, animaciones SVG, rendimiento, accesibilidad y diseño UI tecnológico.

Necesito que implementes una animación narrativa dentro del panel derecho del hero de TrailSoft, exactamente en el sector señalado en la captura adjunta.

La animación debe representar cómo una idea recorre las distintas etapas de desarrollo hasta transformarse en un producto funcionando.

## Objetivo principal

La animación debe unir visualmente tres conceptos centrales de TrailSoft:

* Camino.
* Código.
* Producto digital terminado.

El resultado debe sentirse propio de la marca, elegante y tecnológico.

No debe parecer:

* Una animación genérica creada con IA.
* Una plantilla SaaS.
* Una terminal hacker.
* Código Matrix.
* Una animación gamer o cyberpunk.
* Un conjunto de elementos flotando sin propósito.

---

# 1. REGLAS DE INTERVENCIÓN

Antes de modificar código:

1. Inspeccioná la estructura actual del proyecto.
2. Localizá el componente del hero.
3. Identificá cómo está construido actualmente el panel derecho.
4. Revisá los estilos, tokens y breakpoints existentes.
5. Conservá la arquitectura y convenciones del proyecto.
6. Explicá brevemente qué archivos vas a modificar.
7. Después implementá la animación completa.

No te detengas en una explicación teórica.

## No modificar

No cambies:

* El contenido de la columna izquierda.
* El título “Trazamos el camino. Construimos el software.”
* Los textos.
* Los botones.
* El logo.
* El header.
* La paleta de colores.
* La distribución general del hero.
* El ancho actual de las columnas, salvo que sea necesario corregir el responsive.
* El estilo general aprobado.

La intervención debe concentrarse en el panel derecho señalado en la captura.

---

# 2. IDENTIDAD VISUAL

Respetar el manual de marca.

Colores:

* Azul principal: `#0D8BFF`
* Turquesa: `#34CFBE`
* Fondo principal: `#05080D`
* Fondo alternativo: `#07111B`
* Superficie: `#0B1622`
* Superficie destacada: `#0D1B29`
* Bordes: `#172737`
* Texto principal: `#F5F7FA`
* Texto secundario: `#98A3AF`
* Texto tenue: `#667381`

La animación debe utilizar:

* Líneas de circuito.
* Nodos.
* Recorridos.
* Módulos.
* Paneles técnicos.
* Señales visuales de validación.
* Profundidad muy sutil.

No agregar colores fuera de la identidad.

---

# 3. CONCEPTO DE LA ANIMACIÓN

Nombre conceptual:

**Del código a producción**

La animación debe contar esta secuencia:

```text
IDEA
  ↓
ARQUITECTURA
  ↓
DESARROLLO
  ↓
INTEGRACIÓN
  ↓
CALIDAD
  ↓
PRODUCCIÓN
```

Debe existir un recorrido visual continuo que conecte todas las etapas.

El movimiento principal será una señal luminosa que avanza por una línea de circuito desde “Idea” hasta “Producción”.

---

# 4. COMPOSICIÓN DEL PANEL

Mantener el panel vertical existente con:

* Borde fino.
* Fondo oscuro.
* Grilla técnica muy sutil.
* Encabezado superior “TRAIL SYSTEM”.
* Indicador de etapa en la esquina superior derecha.
* Línea de recorrido.
* Nodos.
* Tres módulos visuales superpuestos.
* Etiquetas de las etapas.
* Nodo final de producción.

Los tres módulos deben representar:

## Módulo 1 — Arquitectura

Debe parecer un wireframe técnico:

* Cabecera pequeña.
* Grilla o columnas.
* División de componentes.
* Estructura de interfaz.
* Sin contenido real innecesario.

## Módulo 2 — Desarrollo e integración

Debe parecer un editor o módulo de código estilizado:

* Líneas de código abstractas.
* Sintaxis minimalista en azul y turquesa.
* Pequeños indicadores de archivo o componente.
* Conexión visual hacia otros módulos.

No utilizar fragmentos extensos de código.

Se pueden utilizar microtextos técnicos breves:

```text
component initialized
api connected
data mapped
```

## Módulo 3 — Producto

Debe representar el resultado final:

* Interfaz más definida.
* Componentes ordenados.
* Estado validado.
* Indicador de sistema funcionando.

No hacer un mockup genérico de notebook o celular.

---

# 5. SECUENCIA TEMPORAL

El ciclo completo debe durar aproximadamente entre 9 y 11 segundos.

## Etapa 01 — Idea

Duración aproximada: 1 segundo.

* Aparece el nodo inicial en la parte inferior.
* El nodo realiza un único pulso suave.
* El indicador superior muestra:

```text
01 — IDEA
```

* Comienza a dibujarse el primer tramo del recorrido.

## Etapa 02 — Arquitectura

Duración aproximada: 1.5 segundos.

* La línea llega al nodo “Arquitectura”.
* El nodo cambia de estado tenue a azul.
* Aparece el primer módulo.
* El módulo entra con:

  * Opacidad de `0` a `1`.
  * Traslación vertical máxima de `12px`.
  * Duración aproximada de `550ms`.
* Dentro del módulo se dibuja progresivamente el wireframe.
* El indicador muestra:

```text
02 — ARQUITECTURA
```

## Etapa 03 — Desarrollo

Duración aproximada: 2 segundos.

* El recorrido continúa hasta “Desarrollo”.
* Aparece el segundo módulo.
* Se escriben progresivamente entre 3 y 5 líneas de código abstracto.
* No utilizar un cursor intermitente permanente.
* El indicador muestra:

```text
03 — DESARROLLO
```

## Etapa 04 — Integración

Duración aproximada: 1.5 segundos.

* Una señal luminosa se desplaza por la conexión.
* Se conectan visualmente los módulos.
* Se activa un pequeño nodo asociado a API o datos.
* Mostrar brevemente:

```text
API CONNECTED
```

* El indicador superior muestra:

```text
04 — INTEGRACIÓN
```

## Etapa 05 — Calidad

Duración aproximada: 1.5 segundos.

* Una línea fina turquesa escanea el producto verticalmente.
* Los nodos validados cambian de azul a turquesa.
* Aparece un check minimalista.
* Mostrar brevemente:

```text
TESTS PASSED
```

* El indicador superior muestra:

```text
05 — CALIDAD
```

## Etapa 06 — Producción

Duración aproximada: 1.5 segundos.

* El recorrido llega al nodo superior derecho.
* El nodo final se ilumina en turquesa.
* Debe aparecer:

```text
DEPLOYED
SISTEMA ONLINE
```

* El indicador superior muestra:

```text
06 — PRODUCCIÓN
```

* Mantener el estado final aproximadamente 2 segundos.
* Reiniciar con una transición suave, sin cortes bruscos.

---

# 6. COMPORTAMIENTO DEL RECORRIDO

Construir el recorrido principal con SVG.

Utilizar:

* `path`.
* `stroke-dasharray`.
* `stroke-dashoffset`.
* Gradiente sutil entre azul y turquesa, solo si respeta el manual.
* Nodos SVG o elementos HTML posicionados de forma controlada.
* Un pequeño punto luminoso que avance sobre el camino.

La línea debe dibujarse progresivamente.

No mover físicamente todo el SVG.

No utilizar una animación aleatoria.

El punto luminoso debe recorrer exactamente el trazado y detenerse brevemente en cada nodo.

La ruta debe comunicar progreso y dirección.

---

# 7. ANIMACIÓN DE LOS MÓDULOS

Los paneles no deben flotar de manera permanente.

Cada módulo aparece cuando el recorrido llega a su etapa.

Utilizar como máximo:

* `opacity`.
* `transform: translateY()`.
* Variaciones sutiles de borde.
* Activación de líneas interiores.
* Resplandor de baja intensidad.

No utilizar:

* Rotaciones pronunciadas.
* Escalados bruscos.
* Efecto elástico.
* Rebotes.
* Movimiento 3D exagerado.
* Parallax constante.
* Sombras intensas.
* Movimiento infinito de todos los elementos.

Después de aparecer, cada módulo debe permanecer estable.

---

# 8. IMPLEMENTACIÓN EN ANGULAR 20

Crear un componente independiente, por ejemplo:

```text
features/home/sections/hero/
  trail-animation/
    trail-animation.component.ts
    trail-animation.component.html
    trail-animation.component.scss
```

O adaptar la estructura al proyecto existente si ya existe una convención mejor.

Usar:

* Standalone Component.
* TypeScript estricto.
* Signals para controlar la etapa actual.
* `ChangeDetectionStrategy.OnPush`.
* Estados tipados.
* CSS o SCSS para las transiciones.
* SVG para la ruta.
* `IntersectionObserver` para iniciar y detener el ciclo.
* Limpieza correcta de timers y observers.

No utilizar:

* `any`.
* Manipulación directa innecesaria del DOM.
* Dependencias pesadas.
* GSAP.
* Three.js.
* Canvas.
* Videos.
* GIF.
* Lottie.
* Librerías de animación, salvo que ya estén justificadamente instaladas.

La animación debe construirse con Angular, CSS y SVG nativos.

---

# 9. SSR E HYDRATION

El proyecto utiliza Angular 20 y debe conservar compatibilidad con SSR o prerender.

La implementación debe:

* No acceder a `window`, `document` o `IntersectionObserver` durante SSR.
* Utilizar `isPlatformBrowser`, `afterNextRender` o la estrategia apropiada.
* Evitar diferencias de markup entre servidor y cliente.
* Evitar errores de hidratación.
* Mostrar en SSR una composición estática válida.
* Iniciar la animación solamente en el navegador.

El HTML generado en servidor debe mostrar el estado final o una versión estática visualmente completa.

---

# 10. VISIBILIDAD Y CICLO

La animación debe:

* Comenzar cuando al menos el 40% del panel sea visible.
* Pausarse cuando salga del viewport.
* No continuar consumiendo recursos en segundo plano.
* Reiniciarse de forma controlada cuando vuelva a ser visible.
* Evitar crear múltiples intervalos.
* Detener todos los timers al destruir el componente.

El ciclo puede repetirse mientras el hero sea visible, pero debe dejar una pausa clara entre repeticiones.

No hacer un loop frenético.

---

# 11. ACCESIBILIDAD

La animación es complementaria.

Agregar una descripción accesible equivalente:

**Proceso de TrailSoft: una idea pasa por arquitectura, desarrollo, integración y control de calidad hasta llegar a producción.**

Si el SVG es puramente decorativo:

* Utilizar `aria-hidden="true"`.
* Incluir la descripción equivalente como texto visualmente oculto.

Respetar obligatoriamente:

```css
@media (prefers-reduced-motion: reduce)
```

Cuando esté activo:

* No ejecutar el recorrido animado.
* Mostrar directamente el estado final.
* Mantener visibles todas las etapas.
* Mostrar el nodo de producción activo.
* No utilizar pulsos, escaneos ni escritura progresiva.

No debe ser necesario observar la animación para comprender la página.

---

# 12. RESPONSIVE

## Desktop

Mantener la composición vertical de la captura.

Los módulos pueden superponerse parcialmente, pero:

* Deben conservar jerarquía.
* No deben tapar etiquetas importantes.
* No deben salirse del panel.
* No deben generar scroll horizontal.

## Tablet

* Reducir ligeramente los paneles.
* Mantener el recorrido completo.
* Reorganizar superposiciones si falta espacio.
* Mantener legibles las etiquetas.

## Mobile

No comprimir la composición desktop.

Crear una variante vertical simplificada:

```text
Idea
  ●
  │
Arquitectura
  ●  [wireframe]
  │
Desarrollo
  ●  [código]
  │
Integración
  ●
  │
Calidad
  ●
  │
Producción
  ●  Sistema online
```

En mobile:

* Reducir la cantidad de líneas internas.
* Evitar superposiciones complejas.
* Mantener el panel dentro del viewport.
* No reducir el texto a tamaños ilegibles.
* No provocar saltos de layout.
* Mantener la misma narrativa.
* Optimizar para 320px, 360px, 390px y 430px.

---

# 13. RENDIMIENTO

La animación debe ser liviana.

Utilizar principalmente:

* `transform`.
* `opacity`.
* SVG.
* Variables CSS.

Evitar:

* Animar propiedades que produzcan reflow constante.
* Filtros intensos.
* Grandes desenfoques animados.
* Sombras actualizadas en cada frame.
* JavaScript ejecutándose a 60 FPS sin necesidad.
* Recálculos permanentes de posiciones.
* Recursos externos.

No perjudicar:

* LCP.
* CLS.
* INP.
* Hydration.
* Tiempo de carga inicial.

El panel debe tener dimensiones reservadas desde el primer render para evitar layout shift.

---

# 14. DETALLES VISUALES

El panel debe incluir:

* `TRAIL SYSTEM` arriba a la izquierda.
* Etapa actual arriba a la derecha.
* Línea principal azul.
* Progresión hacia turquesa.
* Nodos inactivos con baja intensidad.
* Nodo actual con borde iluminado.
* Nodos completados en turquesa.
* Tarjetas con fondo `#0B1622` o `#0D1B29`.
* Bordes `#172737`.
* Código y estados en tipografía monoespaciada.
* Resto de la interfaz con Inter.
* Resplandores suaves y controlados.
* Una grilla de fondo casi imperceptible.

Los microtextos técnicos deben ser pequeños, pero legibles.

No llenar el panel de información.

---

# 15. ESTADOS SUGERIDOS

Crear un modelo tipado similar a:

```typescript
type TrailStageId =
  | 'idea'
  | 'architecture'
  | 'development'
  | 'integration'
  | 'quality'
  | 'production';

interface TrailStage {
  id: TrailStageId;
  number: string;
  label: string;
  duration: number;
}
```

La implementación concreta puede adaptarse a la arquitectura existente.

Separar:

* Configuración de las etapas.
* Estado actual.
* Presentación.
* Temporización.
* Detección de visibilidad.

No distribuir números de tiempo arbitrarios por todo el componente.

Centralizar las duraciones.

---

# 16. PRUEBAS

Crear pruebas útiles para comprobar:

* Render estático inicial.
* Activación de etapas.
* Pausa cuando el panel deja de ser visible.
* Limpieza de timers al destruir el componente.
* Estado final con movimiento reducido.
* Ausencia de acceso al DOM durante SSR.
* Correcta visualización de las etiquetas.
* No creación de ciclos duplicados.

No crear tests vacíos que solamente comprueben que el componente existe.

---

# 17. CRITERIOS DE ACEPTACIÓN

La implementación se considera terminada si:

* El panel cuenta claramente el recorrido de Idea a Producción.
* La animación tiene relación directa con código y desarrollo.
* Se integra al diseño actual sin cambiar la columna izquierda.
* Respeta la paleta del manual.
* No parece una animación genérica de IA.
* No utiliza librerías pesadas.
* Funciona con Angular 20.
* Es compatible con SSR.
* No produce errores de hidratación.
* Respeta `prefers-reduced-motion`.
* Se pausa fuera del viewport.
* No genera scroll horizontal.
* Funciona correctamente en mobile.
* No perjudica el rendimiento.
* No existen errores en consola.
* El build de producción finaliza correctamente.
* Los tests implementados finalizan correctamente.

---

# 18. ENTREGA

Al terminar:

1. Mostrá los archivos creados y modificados.
2. Explicá brevemente la arquitectura del componente.
3. Indicá cómo funciona la secuencia.
4. Documentá las duraciones configurables.
5. Explicá el comportamiento responsive.
6. Explicá el tratamiento de movimiento reducido.
7. Confirmá compatibilidad con SSR.
8. Ejecutá el build de producción.
9. Ejecutá los tests.
10. Corregí cualquier error antes de finalizar.

No entregues solamente ejemplos o pseudocódigo. Implementá la animación completa dentro del hero existente y verificá su funcionamiento.
