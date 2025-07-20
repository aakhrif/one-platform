import { Renderer2, ElementRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { JobModel } from './search.service';
import { SearchStateService } from './search-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-search-result',
  template: `
    @if (results.length) {
      <div class="search-result-panel" tabindex="0">
        <button class="close-btn" (click)="closePanel()" aria-label="Schließen">×</button>
        <ul>
          <ng-container *ngFor="let job of results; trackBy: trackById">
            <li (click)="selectJob(job)" tabindex="0">
              <div class="job-title">{{ job.title }}</div>
              <div class="job-company">{{ job.company }} – {{ job.location }}</div>
              <div class="job-skills">{{ job.skills.join(', ') }}</div>
            </li>
          </ng-container>
        </ul>
      </div>
    }
  `,
  styleUrls: ['./search-result.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {
  searchState = inject(SearchStateService);
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  @Output() jobSelected = new EventEmitter<JobModel>();
  @Output() closed = new EventEmitter<void>();

  get results(): JobModel[] {
    return this.searchState.results();
  }

  trackById(index: number, job: JobModel) {
    return job.id;
  }

  selectJob(job: JobModel) {
    this.jobSelected.emit(job);
  }

  closePanel() {
    this.searchState.clearResults();
    this.closed.emit();
  }

  // handleClickOutside(event: MouseEvent) {
  //   if (this.el && this.el.nativeElement && !this.el.nativeElement.contains(event.target)) {
  //     if (this.results.length) {
  //       this.closePanel();
  //     }
  //   }
  // }
}

