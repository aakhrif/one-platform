import { Injectable, signal } from '@angular/core';
import { JobModel } from './search.service';

@Injectable({ providedIn: 'root' })
export class SearchStateService {
  results = signal<JobModel[]>([]);

  query = signal('');

  setResults(results: JobModel[]) {
    this.results.set(results);
  }

  setQuery(query: string) {
    this.query.set(query);
  }

  clearQuery() {
    this.query.set('');
  }

  clearResults() {
    this.results.set([]);
    this.clearQuery();
  }
}
