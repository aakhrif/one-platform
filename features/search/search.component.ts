import { ChangeDetectionStrategy, Component, inject, signal, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  animatedPlaceholder = '';
  private placeholderWords = ['angular', 'react', 'node'];
  private placeholderIndex = 0;
  private charIndex = 0;
  private typingInterval: any;
  private pauseTimeout: any;

  ngOnInit() {
    this.animatePlaceholder();
  }

  ngOnDestroy() {
    clearInterval(this.typingInterval);
    clearTimeout(this.pauseTimeout);
  }

  private animatePlaceholder() {
    this.typingInterval = setInterval(() => {
      const word = this.placeholderWords[this.placeholderIndex];
      if (this.charIndex < word.length) {
        this.animatedPlaceholder = word.slice(0, this.charIndex + 1);
        this.charIndex++;
      } else {
        clearInterval(this.typingInterval);
        this.pauseTimeout = setTimeout(() => {
          this.charIndex = 0;
          this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholderWords.length;
          this.animatedPlaceholder = '';
          this.animatePlaceholder();
        }, 1200);
      }
    }, 120);
  }
  // Method to focus input from outside
  focusInput() {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }
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
