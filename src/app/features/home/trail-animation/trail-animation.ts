import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal
} from '@angular/core';

export type TrailStageId = 'idea' | 'architecture' | 'development' | 'integration' | 'quality' | 'production';

export interface TrailStage {
  readonly id: TrailStageId;
  readonly number: string;
  readonly label: string;
  readonly duration: number;
  readonly progress: number;
}

export const TRAIL_STAGES: readonly TrailStage[] = [
  { id: 'idea', number: '01', label: 'Idea', duration: 1000, progress: 3 },
  { id: 'architecture', number: '02', label: 'Arquitectura', duration: 1500, progress: 22 },
  { id: 'development', number: '03', label: 'Desarrollo', duration: 2000, progress: 43 },
  { id: 'integration', number: '04', label: 'Integración', duration: 1500, progress: 63 },
  { id: 'quality', number: '05', label: 'Calidad', duration: 1500, progress: 82 },
  { id: 'production', number: '06', label: 'Producción', duration: 2500, progress: 100 }
] as const;

@Component({
  selector: 'app-trail-animation',
  standalone: true,
  templateUrl: './trail-animation.html',
  styleUrl: './trail-animation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrailAnimation implements OnDestroy {
  readonly stages = TRAIL_STAGES;
  readonly currentIndex = signal(TRAIL_STAGES.length - 1);
  readonly currentStage = computed(() => TRAIL_STAGES[this.currentIndex()]!);
  readonly progress = computed(() => this.currentStage().progress);
  readonly reducedMotion = signal(false);
  readonly isRunning = signal(false);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private timer?: ReturnType<typeof setTimeout>;
  private visible = false;

  constructor() {
    afterNextRender(() => this.setupBrowserAnimation());
  }

  isReached(index: number): boolean { return index <= this.currentIndex(); }
  isCurrent(index: number): boolean { return index === this.currentIndex(); }

  startCycle(): void {
    if (this.reducedMotion() || this.isRunning()) return;
    this.clearTimer();
    this.currentIndex.set(0);
    this.isRunning.set(true);
    this.scheduleNextStage();
  }

  pauseCycle(): void {
    this.clearTimer();
    this.isRunning.set(false);
  }

  ngOnDestroy(): void {
    this.pauseCycle();
    this.observer?.disconnect();
  }

  private setupBrowserAnimation(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.reducedMotion.set(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (this.reducedMotion()) {
      this.currentIndex.set(TRAIL_STAGES.length - 1);
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      const nowVisible = entry.isIntersecting && entry.intersectionRatio >= .4;
      if (nowVisible && !this.visible) this.startCycle();
      if (!nowVisible && this.visible) this.pauseCycle();
      this.visible = nowVisible;
    }, { threshold: [0, .4, .75] });
    this.observer.observe(this.host.nativeElement);
  }

  private scheduleNextStage(): void {
    const stage = this.currentStage();
    this.timer = setTimeout(() => {
      if (!this.isRunning()) return;
      const nextIndex = this.currentIndex() === TRAIL_STAGES.length - 1 ? 0 : this.currentIndex() + 1;
      this.currentIndex.set(nextIndex);
      this.scheduleNextStage();
    }, stage.duration);
  }

  private clearTimer(): void {
    if (this.timer !== undefined) clearTimeout(this.timer);
    this.timer = undefined;
  }
}
