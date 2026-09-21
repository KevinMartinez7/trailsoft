import { TestBed } from '@angular/core/testing';
import { FaqSection } from './faq-section';

describe('FaqSection', () => {
  it('keeps answers in the DOM and toggles aria-expanded', async () => {
    await TestBed.configureTestingModule({ imports: [FaqSection] }).compileComponents();
    const fixture = TestBed.createComponent(FaqSection);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const buttons = element.querySelectorAll<HTMLButtonElement>('button');
    expect(element.textContent).toContain('TrailSoft desarrolla aplicaciones web y móviles');
    expect(buttons[2].getAttribute('aria-expanded')).toBe('false');
    buttons[2].click(); fixture.detectChanges();
    expect(buttons[2].getAttribute('aria-expanded')).toBe('true');
  });
});
