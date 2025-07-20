import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { SearchService } from './search.service';

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

  constructor() {
    toObservable(this.query).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(this.isValidSearch),
      switchMap(searchTerm => this.searchService.searchJobs(searchTerm))
    ).subscribe(results => {
      console.log('search results: ', results);
    });
  }

  isValidSearch(query: string): boolean {
    return query.length > 2 && /^[a-zA-Z0-9 ]+$/.test(query);
  }

  onQueryChange(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    console.log('query ', this.query());
  }
}
