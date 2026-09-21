import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, OnDestroy, PLATFORM_ID, Renderer2, inject } from '@angular/core';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) return;
    const target = this.element.nativeElement;
    this.renderer.addClass(target, 'reveal-ready');
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.renderer.addClass(target, 'is-visible');
      this.observer?.disconnect();
    }, { rootMargin: '0px 0px -8%', threshold: .12 });
    this.observer.observe(target);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
