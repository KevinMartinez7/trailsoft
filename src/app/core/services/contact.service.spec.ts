import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  it('fails explicitly when no endpoint is configured', (done) => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    TestBed.inject(ContactService).send({ name: 'A', company: '', email: 'a@b.com', phone: '', projectType: 'MVP', message: 'Descripción suficientemente extensa', website: '', privacy: true }).subscribe({
      error: (error: Error) => { expect(error.message).toBe('CONTACT_ENDPOINT_NOT_CONFIGURED'); done(); }
    });
  });
});
