import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contacto" class="section contact-section" aria-labelledby="contact-title">
      <div class="container contact-layout">
        <div class="contact-copy">
          <span class="eyebrow">Hablemos de tu proyecto</span>
          <h2 id="contact-title">Todo producto empieza con un primer paso.</h2>
          <p>Contanos qué querés construir y analicemos juntos el camino para llevarlo a producción.</p>
        </div>
        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <div class="form-grid">
            <div class="field"><label for="name">Nombre y apellido <b>*</b></label><input id="name" formControlName="name" autocomplete="name" [attr.aria-invalid]="invalid('name')" aria-describedby="name-error">@if (invalid('name')) { <small id="name-error">Ingresá tu nombre y apellido.</small> }</div>
            <div class="field"><label for="email">Correo electrónico <b>*</b></label><input id="email" type="email" formControlName="email" autocomplete="email" [attr.aria-invalid]="invalid('email')" aria-describedby="email-error">@if (invalid('email')) { <small id="email-error">Ingresá un correo electrónico válido.</small> }</div>
            <div class="field"><label for="company">Empresa <span>Opcional</span></label><input id="company" formControlName="company" autocomplete="organization"></div>
            <div class="field"><label for="phone">Teléfono o WhatsApp <span>Opcional</span></label><input id="phone" type="tel" formControlName="phone" autocomplete="tel"></div>
            <div class="field field-wide"><label for="projectType">Tipo de proyecto <b>*</b></label><select id="projectType" formControlName="projectType" [attr.aria-invalid]="invalid('projectType')"><option value="" disabled>Seleccioná una opción</option>@for (type of projectTypes; track type) { <option [value]="type">{{ type }}</option> }</select>@if (invalid('projectType')) { <small>Seleccioná un tipo de proyecto.</small> }</div>
            <div class="field field-wide"><label for="message">¿Qué necesitás construir? <b>*</b></label><textarea id="message" rows="5" formControlName="message" [attr.aria-invalid]="invalid('message')" aria-describedby="message-hint message-error"></textarea><span id="message-hint" class="hint">Objetivo, usuarios, integraciones o cualquier contexto útil.</span>@if (invalid('message')) { <small id="message-error">Contanos un poco más (mínimo 20 caracteres).</small> }</div>
            <div class="honeypot" aria-hidden="true"><label for="website">Sitio web</label><input id="website" formControlName="website" tabindex="-1" autocomplete="off"></div>
            <label class="check field-wide"><input type="checkbox" formControlName="privacy"><span>Acepto que TrailSoft utilice estos datos para responder mi consulta. <b>*</b></span></label>
          </div>
          <button class="button submit-button" type="submit" [disabled]="sending()">{{ sending() ? 'Enviando…' : 'Enviar consulta' }} <span aria-hidden="true">↗</span></button>
          <p class="form-status" role="status" aria-live="polite">{{ status() }}</p>
        </form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSection {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  readonly sending = signal(false);
  readonly status = signal('');
  readonly projectTypes = ['Aplicación web', 'Aplicación móvil', 'Software a medida', 'MVP', 'Integración o API', 'IA y automatización', 'Otro'];
  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]], company: [''], email: ['', [Validators.required, Validators.email]], phone: [''],
    projectType: ['', [Validators.required]], message: ['', [Validators.required, Validators.minLength(20)]], website: [''], privacy: [false, [Validators.requiredTrue]]
  });
  invalid(name: keyof typeof this.form.controls): boolean { const control = this.form.controls[name]; return control.invalid && (control.touched || control.dirty); }
  submit(): void {
    this.status.set('');
    if (this.form.invalid) { this.form.markAllAsTouched(); this.status.set('Revisá los campos señalados antes de continuar.'); return; }
    if (this.form.controls.website.value) return;
    this.sending.set(true);
    this.contactService.send(this.form.getRawValue()).pipe(finalize(() => this.sending.set(false))).subscribe({
      next: () => { this.status.set('Recibimos tu consulta. Te responderemos pronto.'); this.form.reset(); },
      error: (error: Error) => this.status.set(error.message === 'CONTACT_ENDPOINT_NOT_CONFIGURED' ? 'El formulario está listo, pero todavía falta configurar el canal de envío. Podés contactarnos cuando se publique el correo oficial.' : 'No pudimos enviar la consulta. Intentá nuevamente en unos minutos.')
    });
  }
}
