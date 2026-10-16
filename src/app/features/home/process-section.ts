import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROCESS_STEPS } from '../../core/data/site-content';

@Component({
  selector: 'app-process-section',
  standalone: true,
  template: `
    <section id="proceso" class="section process-section" aria-labelledby="process-title">
      <div class="container process-layout">
        <div class="process-intro">
          <span class="eyebrow">Nuestro proceso</span>
          <h2 id="process-title">Desde la idea a la realidad</h2>
          <p>Seguimos un proceso claro y confiable, manteniendo comunicación constante con vos en cada etapa.</p>
        </div>
        <ol class="process-list">
          @for (step of steps; track step.number) {
            <li>
              <span class="process-number">{{ step.number }}</span>
              <div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessSection { readonly steps = PROCESS_STEPS; }
