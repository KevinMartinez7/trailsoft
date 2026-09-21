import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FAQS } from '../../core/data/site-content';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  template: `
    <section id="preguntas" class="section faq-section" aria-labelledby="faq-title">
      <div class="container faq-layout">
        <div class="section-intro">
          <span class="eyebrow">Preguntas frecuentes</span>
          <h2 id="faq-title">Desarrollo de software para empresas</h2>
          <p>Respuestas breves sobre nuestros servicios, procesos y soluciones tecnológicas.</p>
        </div>
        <div class="faq-list">
          @for (faq of faqs; track faq.question; let index = $index) {
            <article class="faq-item" [class.open]="isOpen(index)">
              <h3>
                <button type="button" [attr.aria-expanded]="isOpen(index)" [attr.aria-controls]="'faq-panel-' + index" (click)="toggle(index)">
                  <span>{{ faq.question }}</span><span aria-hidden="true">{{ isOpen(index) ? '−' : '+' }}</span>
                </button>
              </h3>
              <div class="faq-answer" [id]="'faq-panel-' + index" [attr.inert]="isOpen(index) ? null : ''">
                <p>{{ faq.answer }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqSection {
  readonly faqs = FAQS;
  readonly openItems = signal<ReadonlySet<number>>(new Set([0, 1]));
  isOpen(index: number): boolean { return this.openItems().has(index); }
  toggle(index: number): void {
    const next = new Set(this.openItems());
    next.has(index) ? next.delete(index) : next.add(index);
    this.openItems.set(next);
  }
}
