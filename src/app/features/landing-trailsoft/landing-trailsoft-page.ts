import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  private readonly router = inject(Router);

  navigateToSection(event: MouseEvent, fragment: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const link = event.target instanceof Element ? event.target.closest('a[href="#servicios"]') : null;
    if (!link) return;

    const section = document.getElementById(fragment);
    if (!section) return;

    event.preventDefault();
    void this.router.navigate([], {
      fragment,
      queryParamsHandling: 'preserve',
      replaceUrl: true
    });

    const headerHeight = document.querySelector<HTMLElement>('.site-header')?.getBoundingClientRect().height ?? 0;
    const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight);
    window.scrollTo({ top, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  scrollTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  }
}
