import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
}

interface DataLayerEvent extends Record<string, unknown> {
  event: string;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

const EMPTY_ATTRIBUTION: AttributionData = {
  utm_source: '', utm_medium: '', utm_campaign: '',
  utm_term: '', utm_content: '', gclid: ''
};

const STORAGE_KEY = 'trailsoft_attribution';

@Injectable({ providedIn: 'root' })
export class MarketingTrackingService {
  private readonly platformId = inject(PLATFORM_ID);

  captureAttribution(): AttributionData {
    if (!isPlatformBrowser(this.platformId)) return { ...EMPTY_ATTRIBUTION };

    const params = new URLSearchParams(window.location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
    if (keys.some((key) => params.has(key))) {
      const attribution: AttributionData = {
        utm_source: params.get('utm_source')?.trim() ?? '',
        utm_medium: params.get('utm_medium')?.trim() ?? '',
        utm_campaign: params.get('utm_campaign')?.trim() ?? '',
        utm_term: params.get('utm_term')?.trim() ?? '',
        utm_content: params.get('utm_content')?.trim() ?? '',
        gclid: params.get('gclid')?.trim() ?? ''
      };
      this.store(attribution);
      return attribution;
    }

    return this.readStored();
  }

  trackLead(email: string, phone: string, attribution: AttributionData): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const userData: Record<string, string> = { email: email.trim().toLowerCase() };
    if (phone.trim()) userData['phone_number'] = phone.trim();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      lead_source: attribution.utm_source || (attribution.gclid ? 'google' : 'direct'),
      form_location: window.location.pathname,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_term: attribution.utm_term,
      utm_content: attribution.utm_content,
      gclid: attribution.gclid,
      user_data: userData
    });
  }

  private store(attribution: AttributionData): void {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // Tracking must never prevent the contact form from working.
    }
  }

  private readStored(): AttributionData {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (!stored) return { ...EMPTY_ATTRIBUTION };
      return { ...EMPTY_ATTRIBUTION, ...(JSON.parse(stored) as Partial<AttributionData>) };
    } catch {
      return { ...EMPTY_ATTRIBUTION };
    }
  }
}
