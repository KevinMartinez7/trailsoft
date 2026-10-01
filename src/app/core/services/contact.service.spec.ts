import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  it('posts the contact payload to the server endpoint', () => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const http = TestBed.inject(HttpTestingController);
    const payload = { name: 'A', company: 'TrailSoft', email: 'a@b.com', phone: '+5491112345678', projectType: 'MVP', message: 'Descripción suficientemente extensa', website: '', utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '', gclid: '' };
    TestBed.inject(ContactService).send(payload).subscribe();
    const request = http.expectOne('/api/contact');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(payload);
    request.flush({ ok: true });
    http.verify();
  });
});
