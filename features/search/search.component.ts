import { ChangeDetectionStrategy, Component, inject, signal, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { SearchService } from './search.service';
import { JobModel } from './search.service';
import { SearchStateService } from './search-state.service';

@Component({
  selector: 'ui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  query = signal('');
  focused = false;
  searchService = inject(SearchService);

  searchState = inject(SearchStateService);

  // Output for results and job selection
  @Output() jobSelected = new EventEmitter<JobModel>();
  @Output() resultsChange = new EventEmitter<JobModel[]>();

  constructor() {
    toObservable(this.query).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(this.isValidSearch),
      switchMap(searchTerm => this.searchService.searchJobs(searchTerm))
    ).subscribe(results => {
      this.searchState.setResults(results);
      console.log('search results: ', results);
      this.resultsChange.emit(results);
    });
  }

  isValidSearch(query: string): boolean {
    return query.length > 2 && /^[a-zA-Z0-9 ]+$/.test(query);
  }

  onQueryChange(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    console.log('query ', this.query());
  }

  onJobSelected(job: JobModel) {
    // Handle job selection (e.g. navigate, show details, etc.)
    console.log('Job selected:', job);
    this.jobSelected.emit(job);
  }

  onPanelClosed() {
    // this.results = [];
  }
}
