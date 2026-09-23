import { TestBed } from '@angular/core/testing';
import { MarketingTrackingService } from './marketing-tracking.service';

describe('MarketingTrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    sessionStorage.clear();
    window.dataLayer = [];
  });

  it('captures campaign parameters and keeps them for the session', () => {
    const service = TestBed.inject(MarketingTrackingService);
    history.replaceState({}, '', '?utm_source=google&utm_medium=cpc&utm_campaign=software&gclid=click-123');

    const captured = service.captureAttribution();
    expect(captured.utm_source).toBe('google');
    expect(captured.utm_campaign).toBe('software');
    expect(captured.gclid).toBe('click-123');

    history.replaceState({}, '', location.pathname);
    expect(service.captureAttribution()).toEqual(captured);
  });

  it('pushes generate_lead with user data and attribution', () => {
    const service = TestBed.inject(MarketingTrackingService);
    service.trackLead(' Lead@Example.com ', '+54 9 11 1234 5678', {
      utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'software',
      utm_term: '', utm_content: 'ad-a', gclid: 'click-123'
    });

    expect(window.dataLayer.at(-1)).toEqual(jasmine.objectContaining({
      event: 'generate_lead',
      lead_source: 'google',
      gclid: 'click-123',
      user_data: { email: 'lead@example.com', phone_number: '+54 9 11 1234 5678' }
    }));
  });
});
