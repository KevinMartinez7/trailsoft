import { afterNextRender, ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ContactService } from '../../core/services/contact.service';
import { MarketingTrackingService } from '../../core/services/marketing-tracking.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contacto" class="section contact-section" aria-labelledby="contact-title">
      <div class="container contact-layout">
        <div class="contact-copy">
          <span class="eyebrow">Hablemos de tu proyecto</span>
          <h2 id="contact-title">Contanos qué querés lograr y te ayudamos a encontrar el camino.</h2>
          <p>No hace falta que tengas todo definido. Compartinos tu desafío y te respondemos con una orientación clara para empezar.</p>
        </div>
        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <div class="form-grid">
            <div class="field"><label for="name">¿Con quién tenemos el gusto? <b>*</b></label><input id="name" formControlName="name" autocomplete="name" [attr.aria-invalid]="invalid('name')" aria-describedby="name-error">@if (invalid('name')) { <small id="name-error">Ingresá tu nombre y apellido.</small> }</div>
            <div class="field"><label for="email">Correo electrónico <b>*</b></label><input id="email" type="email" formControlName="email" autocomplete="email" [attr.aria-invalid]="invalid('email')" aria-describedby="email-error">@if (invalid('email')) { <small id="email-error">Ingresá un correo electrónico válido.</small> }</div>
            <div class="field"><label for="company">¿Desde qué empresa nos escribís? <b>*</b></label><input id="company" formControlName="company" autocomplete="organization" [attr.aria-invalid]="invalid('company')" aria-describedby="company-error">@if (invalid('company')) { <small id="company-error">Ingresá el nombre de tu empresa.</small> }</div>
            <div class="field"><label for="phone">Teléfono o WhatsApp <b>*</b></label><input id="phone" type="tel" formControlName="phone" autocomplete="tel" placeholder="+54 9 11 1234 5678" [attr.aria-invalid]="invalid('phone')" aria-describedby="phone-error">@if (invalid('phone')) { <small id="phone-error">Ingresá un teléfono o WhatsApp de contacto.</small> }</div>
            <div class="field field-wide"><label for="projectType">¿En qué podemos ayudarte? <b>*</b></label><select id="projectType" formControlName="projectType" [attr.aria-invalid]="invalid('projectType')"><option value="" disabled>Elegí una opción</option>@for (type of projectTypes; track type) { <option [value]="type">{{ type }}</option> }</select>@if (invalid('projectType')) { <small>Elegí una opción para orientarnos.</small> }</div>
            <div class="field field-wide"><label for="message">Contanos sobre tu desafío <b>*</b></label><textarea id="message" rows="5" formControlName="message" [attr.aria-invalid]="invalid('message')" aria-describedby="message-hint message-error"></textarea><span id="message-hint" class="hint">¿Qué querés mejorar, vender, ordenar o hacer posible?</span>@if (invalid('message')) { <small id="message-error">Contanos un poco más (mínimo 20 caracteres).</small> }</div>
            <div class="honeypot" aria-hidden="true"><label for="website">Sitio web</label><input id="website" formControlName="website" tabindex="-1" autocomplete="off"></div>
            <input type="hidden" name="utm_source" formControlName="utm_source">
            <input type="hidden" name="utm_medium" formControlName="utm_medium">
            <input type="hidden" name="utm_campaign" formControlName="utm_campaign">
            <input type="hidden" name="utm_term" formControlName="utm_term">
            <input type="hidden" name="utm_content" formControlName="utm_content">
            <input type="hidden" name="gclid" formControlName="gclid">
          </div>
          <button class="button submit-button" type="submit" [disabled]="sending()">{{ sending() ? 'Enviando…' : 'Quiero que me contacten' }} <span aria-hidden="true">↗</span></button>
        </form>
      </div>
    </section>
    @if (status()) {
      <div class="form-feedback-backdrop" (click)="dismissStatus()">
        <div class="form-feedback-modal" [class.form-feedback-success]="statusType() === 'success'" [class.form-feedback-error]="statusType() === 'error'" role="alertdialog" aria-modal="true" aria-labelledby="form-feedback-title" aria-describedby="form-feedback-message" (click)="$event.stopPropagation()">
          <button class="form-feedback-close" type="button" aria-label="Cerrar aviso" (click)="dismissStatus()">×</button>
          <span class="form-feedback-icon" aria-hidden="true">{{ statusType() === 'success' ? '✓' : '!' }}</span>
          <span class="form-feedback-eyebrow">{{ statusType() === 'success' ? 'Consulta recibida' : 'No pudimos enviarla' }}</span>
          <h2 id="form-feedback-title">{{ statusType() === 'success' ? '¡Gracias por escribirnos!' : 'Ocurrió un inconveniente' }}</h2>
          <p id="form-feedback-message">{{ status() }}</p>
          <button class="button form-feedback-action" type="button" (click)="dismissStatus()">{{ statusType() === 'success' ? 'Volver al sitio' : 'Intentar nuevamente' }} <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSection {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly marketingTracking = inject(MarketingTrackingService);
  readonly sending = signal(false);
  readonly status = signal('');
  readonly statusType = signal<'idle' | 'success' | 'error'>('idle');
  readonly projectTypes = ['Mejorar mi operación', 'Crear una web o app', 'Lanzar una idea', 'Conectar mis herramientas', 'Automatizar tareas', 'Incorporar IA', 'Todavía no estoy seguro'];
  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]], company: ['', [Validators.required]], email: ['', [Validators.required, Validators.email]], phone: ['', [Validators.required]],
    projectType: ['', [Validators.required]], message: ['', [Validators.required, Validators.minLength(20)]], website: [''],
    utm_source: [''], utm_medium: [''], utm_campaign: [''], utm_term: [''], utm_content: [''], gclid: ['']
  });

  constructor() {
    afterNextRender(() => this.form.patchValue(this.marketingTracking.captureAttribution()));
  }

  invalid(name: keyof typeof this.form.controls): boolean { const control = this.form.controls[name]; return control.invalid && (control.touched || control.dirty); }
  dismissStatus(): void { this.status.set(''); this.statusType.set('idle'); }
  @HostListener('document:keydown.escape') onEscape(): void { if (this.status()) this.dismissStatus(); }
  submit(): void {
    this.status.set('');
    this.statusType.set('idle');
    if (this.form.invalid) { this.form.markAllAsTouched(); this.statusType.set('error'); this.status.set('Revisá los campos señalados antes de continuar.'); return; }
    if (this.form.controls.website.value) return;
    this.sending.set(true);
    const payload = this.form.getRawValue();
    this.contactService.send(payload).pipe(finalize(() => this.sending.set(false))).subscribe({
      next: () => {
        this.marketingTracking.trackLead(payload.email, payload.phone, payload);
        this.statusType.set('success');
        this.status.set('Consulta enviada correctamente. Gracias por escribirnos; te responderemos pronto.');
        this.form.reset({ ...this.marketingTracking.captureAttribution() });
      },
      error: (error: Error) => {
        this.statusType.set('error');
        this.status.set(error.message === 'CONTACT_ENDPOINT_NOT_CONFIGURED' ? 'El formulario está listo, pero todavía falta configurar el canal de envío.' : 'No pudimos enviar la consulta. Revisá tu conexión e intentá nuevamente en unos minutos.');
      }
    });
  }
}
