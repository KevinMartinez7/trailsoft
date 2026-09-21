import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROCESS_STEPS } from '../../core/data/site-content';

@Component({
  selector: 'app-process-section',
  standalone: true,
  template: `
    <section id="proceso" class="section process-section" aria-labelledby="process-title">
      <div class="container process-layout">
        <div class="process-intro">
          <span class="eyebrow">Cómo construimos</span>
          <h2 id="process-title">De la idea a producción.</h2>
          <p>Un proceso claro para reducir incertidumbre, validar decisiones y construir productos preparados para crecer.</p>
          <div class="process-key"><span></span> Avance verificable en cada etapa</div>
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
