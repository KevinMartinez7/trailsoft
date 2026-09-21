import { TestBed } from '@angular/core/testing';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  it('opens and closes the mobile menu with accessible state', async () => {
    await TestBed.configureTestingModule({ imports: [SiteHeader] }).compileComponents();
    const fixture = TestBed.createComponent(SiteHeader); fixture.detectChanges();
    const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.menu-button')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click(); fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    fixture.componentInstance.onEscape(); fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('uses real anchor links for section navigation', async () => {
    await TestBed.configureTestingModule({ imports: [SiteHeader] }).compileComponents();
    const fixture = TestBed.createComponent(SiteHeader); fixture.detectChanges();
    const hrefs = [...(fixture.nativeElement as HTMLElement).querySelectorAll('nav a')].map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('#servicios'); expect(hrefs).toContain('#contacto');
  });
});
