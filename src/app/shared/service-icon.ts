import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-service-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      @switch (kind()) {
        @case ('01') { <rect x="4" y="6" width="24" height="19" rx="2"/><path d="M4 11h24M8 8.5h.1M12 8.5h.1"/> }
        @case ('02') { <rect x="9" y="3" width="14" height="26" rx="3"/><path d="M13 7h6M14 25h4"/> }
        @case ('03') { <rect x="3" y="5" width="8" height="8" rx="1"/><rect x="21" y="19" width="8" height="8" rx="1"/><path d="M11 9h7a4 4 0 0 1 4 4v6M18 9l-3-3M18 9l-3 3"/> }
        @case ('04') { <path d="M7 21c-2 2-3 6-3 6s4-1 6-3M11 22l-4-4 5-9c3-5 8-6 13-5 1 5 0 10-5 13l-9 5Z"/><circle cx="19" cy="10" r="2"/><path d="m13 20 3 5 4-1 2-5M9 16l-5-1-1-4 3-3"/> }
        @case ('05') { <circle cx="6" cy="16" r="3"/><circle cx="16" cy="6" r="3"/><circle cx="26" cy="16" r="3"/><circle cx="16" cy="26" r="3"/><path d="m8 14 6-6m4 0 6 6m0 4-6 6m-4 0-6-6"/> }
        @default { <circle cx="16" cy="16" r="5"/><path d="M16 3v5M16 24v5M3 16h5M24 16h5M7 7l4 4M21 21l4 4M25 7l-4 4M11 21l-4 4"/> }
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceIcon { readonly kind = input.required<string>(); }
