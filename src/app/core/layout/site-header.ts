import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, HostListener, PLATFORM_ID, Renderer2, signal, viewChild, inject } from '@angular/core';
import { NAV_ITEMS } from '../data/site-content';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="TrailSoft, ir al inicio">
          <img src="brand/trailsoft-logo-dark.png" width="1020" height="290" fetchpriority="high" alt="TrailSoft — Ideas que se convierten en soluciones">
        </a>
        <button #menuButton class="menu-button" type="button" [attr.aria-expanded]="menuOpen()" aria-controls="main-navigation" [attr.aria-label]="menuOpen() ? 'Cerrar menú' : 'Abrir menú'" (click)="toggleMenu()">
          <span></span><span></span>
        </button>
        <nav id="main-navigation" class="main-nav" [class.open]="menuOpen()" aria-label="Navegación principal">
          @for (item of navItems; track item.href) {
            <a [href]="item.href" [class.active]="activeSection() === item.href.slice(1)" [attr.aria-current]="activeSection() === item.href.slice(1) ? 'location' : null" (click)="closeMenu()">{{ item.label }}</a>
          }
          <a class="button button-small" href="#contacto" (click)="closeMenu()">Hablemos de tu proyecto</a>
        </nav>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeader {
  readonly navItems = NAV_ITEMS;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('inicio');
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) this.activeSection.set(visible.target.id);
      }, { rootMargin: '-25% 0px -60%', threshold: [0, .2, .5] });
      document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => observer.observe(section));
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  @HostListener('window:scroll') onScroll(): void { this.scrolled.set(window.scrollY > 24); }
  @HostListener('document:keydown.escape') onEscape(): void { if (this.menuOpen()) this.closeMenu(true); }
  @HostListener('document:keydown.tab', ['$event']) onTab(event: Event): void {
    if (!this.menuOpen()) return;
    const keyboardEvent = event as KeyboardEvent;
    const items = [...document.querySelectorAll<HTMLElement>('#main-navigation a, .menu-button')];
    const first = items[0]; const last = items.at(-1);
    if (keyboardEvent.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!keyboardEvent.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }

  toggleMenu(): void {
    const open = !this.menuOpen();
    this.menuOpen.set(open);
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(document.body, 'overflow', open ? 'hidden' : '');
      if (open) setTimeout(() => document.querySelector<HTMLElement>('#main-navigation a')?.focus());
    }
  }

  closeMenu(restoreFocus = false): void {
    this.menuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) this.renderer.removeStyle(document.body, 'overflow');
    if (restoreFocus) this.menuButton()?.nativeElement.focus();
  }
}
