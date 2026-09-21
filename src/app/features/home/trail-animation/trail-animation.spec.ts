import { TestBed } from '@angular/core/testing';
import { TrailAnimation, TRAIL_STAGES } from './trail-animation';

describe('TrailAnimation', () => {
  beforeEach(() => jasmine.clock().install());
  afterEach(() => jasmine.clock().uninstall());

  it('renders a complete static production state for SSR and hydration', async () => {
    await TestBed.configureTestingModule({ imports: [TrailAnimation] }).compileComponents();
    const fixture = TestBed.createComponent(TrailAnimation); fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance.currentStage().id).toBe('production');
    expect(element.textContent).toContain('Idea');
    expect(element.textContent).toContain('Producción');
    expect(element.textContent).toContain('SISTEMA ONLINE');
  });

  it('advances through the configured stages without creating a duplicate cycle', async () => {
    await TestBed.configureTestingModule({ imports: [TrailAnimation] }).compileComponents();
    const fixture = TestBed.createComponent(TrailAnimation);
    const component = fixture.componentInstance;
    component.startCycle(); component.startCycle();
    expect(component.currentStage().id).toBe('idea');
    jasmine.clock().tick(TRAIL_STAGES[0].duration + 1);
    expect(component.currentStage().id).toBe('architecture');
  });

  it('pauses and clears progression when requested', async () => {
    await TestBed.configureTestingModule({ imports: [TrailAnimation] }).compileComponents();
    const fixture = TestBed.createComponent(TrailAnimation);
    const component = fixture.componentInstance;
    component.startCycle(); component.pauseCycle();
    jasmine.clock().tick(5000);
    expect(component.currentStage().id).toBe('idea');
    expect(component.isRunning()).toBeFalse();
  });

  it('keeps the complete production state when reduced motion is enabled', async () => {
    await TestBed.configureTestingModule({ imports: [TrailAnimation] }).compileComponents();
    const fixture = TestBed.createComponent(TrailAnimation);
    const component = fixture.componentInstance;
    component.reducedMotion.set(true);
    component.startCycle();
    expect(component.currentStage().id).toBe('production');
    expect(component.isRunning()).toBeFalse();
  });

  it('cleans the active timer when destroyed', async () => {
    await TestBed.configureTestingModule({ imports: [TrailAnimation] }).compileComponents();
    const fixture = TestBed.createComponent(TrailAnimation);
    fixture.componentInstance.startCycle();
    fixture.destroy(); jasmine.clock().tick(5000);
    expect(fixture.componentInstance.currentStage().id).toBe('idea');
  });
});
