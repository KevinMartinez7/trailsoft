import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject } from '@angular/core';
import { SITE_CONFIG } from '../../core/config/site.config';
import { ContactSection } from '../home/contact-section';
import { RevealDirective } from '../../shared/reveal.directive';
import { ServiceIcon } from '../../shared/service-icon';
import { LegacyFaqSection } from './legacy-faq-section';
import { LegacyProcessSection } from './legacy-process-section';
import { LegacySiteHeader } from './legacy-site-header';
import { TrailAnimation as LegacyTrailAnimation } from './trail-animation/trail-animation';
import { DIFFERENTIATORS, INDUSTRIES, NAV_ITEMS, SERVICES } from './legacy-site-content';

@Component({
  selector: 'app-legacy-page',
  standalone: true,
  imports: [LegacySiteHeader, LegacyProcessSection, LegacyFaqSection, ContactSection, RevealDirective, ServiceIcon, LegacyTrailAnimation],
  templateUrl: './legacy-page.html',
  styleUrl: './legacy-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegacyPage {
  readonly services = SERVICES;
  readonly industries = INDUSTRIES;
  readonly differentiators = DIFFERENTIATORS;
  readonly navItems = NAV_ITEMS;
  readonly year = new Date().getFullYear();
  readonly config = SITE_CONFIG;
  private readonly platformId = inject(PLATFORM_ID);

  get whatsappUrl(): string {
    return SITE_CONFIG.whatsappNumber
      ? `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`
      : '';
  }

  scrollTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }
}
