import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SITE_CONFIG } from '../config/site.config';

export interface ContactPayload { name: string; company: string; email: string; phone: string; projectType: string; message: string; website: string; privacy: boolean; }

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  send(payload: ContactPayload): Observable<void> {
    if (!SITE_CONFIG.contactEndpoint) return throwError(() => new Error('CONTACT_ENDPOINT_NOT_CONFIGURED'));
    return this.http.post<void>(SITE_CONFIG.contactEndpoint, payload);
  }
}
