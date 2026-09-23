import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContactService } from '../../core/services/contact.service';
import { AttributionData, MarketingTrackingService } from '../../core/services/marketing-tracking.service';
import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  it('shows accessible errors for an invalid submission', async () => {
    await TestBed.configureTestingModule({ imports: [ContactSection], providers: [provideHttpClient()] }).compileComponents();
    const fixture = TestBed.createComponent(ContactSection); fixture.detectChanges();
    (fixture.nativeElement as HTMLElement).querySelector<HTMLFormElement>('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#name')?.getAttribute('aria-invalid')).toBe('true');
    expect(element.querySelector('#company')?.getAttribute('aria-invalid')).toBe('true');
    expect(element.querySelector('#phone')?.getAttribute('aria-invalid')).toBe('true');
    expect(element.querySelector('#company-error')).toBeTruthy();
    expect(element.querySelector('#phone-error')).toBeTruthy();
    expect(element.textContent).toContain('Revisá los campos señalados');
  });

  it('does not claim success when the endpoint is not configured', async () => {
    await TestBed.configureTestingModule({ imports: [ContactSection], providers: [provideHttpClient()] }).compileComponents();
    const fixture = TestBed.createComponent(ContactSection);
    fixture.componentInstance.form.patchValue({ name: 'Ana', company: 'TrailSoft', email: 'ana@example.com', phone: '+5491112345678', projectType: 'MVP', message: 'Necesitamos validar un producto digital.', website: '', privacy: true });
    fixture.componentInstance.submit(); fixture.detectChanges();
    expect(fixture.componentInstance.status()).toContain('falta configurar');
  });

  it('tracks a lead only after the form is sent successfully', async () => {
    const attribution: AttributionData = {
      utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'software',
      utm_term: '', utm_content: 'ad-a', gclid: 'click-123'
    };
    const contactService = { send: jasmine.createSpy().and.returnValue(of(void 0)) };
    const marketingTracking = {
      captureAttribution: jasmine.createSpy().and.returnValue(attribution),
      trackLead: jasmine.createSpy()
    };
    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [
        provideHttpClient(),
        { provide: ContactService, useValue: contactService },
        { provide: MarketingTrackingService, useValue: marketingTracking }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(ContactSection);
    fixture.detectChanges();
    fixture.componentInstance.form.patchValue({
      name: 'Ana', company: 'TrailSoft', email: 'ana@example.com', phone: '+5491112345678', projectType: 'MVP',
      message: 'Necesitamos validar un producto digital.', privacy: true, ...attribution
    });
    fixture.componentInstance.submit();

    expect(contactService.send).toHaveBeenCalledWith(jasmine.objectContaining(attribution));
    expect(marketingTracking.trackLead).toHaveBeenCalledWith('ana@example.com', '+5491112345678', jasmine.objectContaining(attribution));
  });
});
