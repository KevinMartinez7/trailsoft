import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject } from '@angular/core';
import { SiteHeader } from '../../core/layout/site-header';
import { INDUSTRIES, SERVICES } from '../../core/data/site-content';
import { NavItem } from '../../core/models/content.models';
import { RevealDirective } from '../../shared/reveal.directive';
import { ServiceIcon } from '../../shared/service-icon';
import { ContactSection } from '../home/contact-section';
import { FaqSection } from '../home/faq-section';
import { ProcessSection } from '../home/process-section';

@Component({
  selector: 'app-landing-trailsoft-page',
  standalone: true,
  imports: [
    SiteHeader,
    ProcessSection,
    ContactSection,
    FaqSection,
    RevealDirective,
    ServiceIcon
  ],
  templateUrl: './landing-trailsoft-page.html',
  styleUrl: './landing-trailsoft-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingTrailsoftPage {
  readonly services = SERVICES;
  readonly industries = INDUSTRIES;
  readonly year = new Date().getFullYear();
  readonly navItems: readonly NavItem[] = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Cómo trabajamos', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Preguntas frecuentes', href: '#preguntas' }
  ];
  private readonly platformId = inject(PLATFORM_ID);

  scrollTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  }
}
