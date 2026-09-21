import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  it('shows accessible errors for an invalid submission', async () => {
    await TestBed.configureTestingModule({ imports: [ContactSection], providers: [provideHttpClient()] }).compileComponents();
    const fixture = TestBed.createComponent(ContactSection); fixture.detectChanges();
    (fixture.nativeElement as HTMLElement).querySelector<HTMLFormElement>('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#name')?.getAttribute('aria-invalid')).toBe('true');
    expect(element.textContent).toContain('Revisá los campos señalados');
  });

  it('does not claim success when the endpoint is not configured', async () => {
    await TestBed.configureTestingModule({ imports: [ContactSection], providers: [provideHttpClient()] }).compileComponents();
    const fixture = TestBed.createComponent(ContactSection);
    fixture.componentInstance.form.setValue({ name: 'Ana', company: '', email: 'ana@example.com', phone: '', projectType: 'MVP', message: 'Necesitamos validar un producto digital.', website: '', privacy: true });
    fixture.componentInstance.submit(); fixture.detectChanges();
    expect(fixture.componentInstance.status()).toContain('falta configurar');
  });
});
