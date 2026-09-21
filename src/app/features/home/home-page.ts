import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject } from '@angular/core';
import { SiteHeader } from '../../core/layout/site-header';
import { DIFFERENTIATORS, INDUSTRIES, NAV_ITEMS, SERVICES } from '../../core/data/site-content';
import { SITE_CONFIG } from '../../core/config/site.config';
import { ContactSection } from './contact-section';
import { FaqSection } from './faq-section';
import { ProcessSection } from './process-section';
import { RevealDirective } from '../../shared/reveal.directive';
import { ServiceIcon } from '../../shared/service-icon';
import { TrailAnimation } from './trail-animation/trail-animation';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiteHeader, ProcessSection, FaqSection, ContactSection, RevealDirective, ServiceIcon, TrailAnimation],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  readonly services = SERVICES;
  readonly industries = INDUSTRIES;
  readonly differentiators = DIFFERENTIATORS;
  readonly navItems = NAV_ITEMS;
  readonly year = new Date().getFullYear();
  readonly config = SITE_CONFIG;
  private readonly platformId = inject(PLATFORM_ID);

  get whatsappUrl(): string {
    return SITE_CONFIG.whatsappNumber ? `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}` : '';
  }
  scrollTop(): void {
    if (isPlatformBrowser(this.platformId)) window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
}
