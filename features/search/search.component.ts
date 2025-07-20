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
  searchState = inject(SearchStateService);
  get query() {
    return this.searchState.query();
  }
  setQuery(value: string) {
    this.searchState.setQuery(value);
  }
  focused = false;
  searchService = inject(SearchService);

  // Output for results and job selection
  @Output() jobSelected = new EventEmitter<JobModel>();
  @Output() resultsChange = new EventEmitter<JobModel[]>();

  constructor() {
    toObservable(this.searchState.query).pipe(
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
    const value = (event.target as HTMLInputElement).value;
    this.setQuery(value);
    console.log('query ', value);
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
