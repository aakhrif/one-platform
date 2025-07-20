import { Injectable, signal } from '@angular/core';
import { JobModel } from './search.service';

@Injectable({ providedIn: 'root' })
export class SearchStateService {
  results = signal<JobModel[]>([]);

  setResults(results: JobModel[]) {
    this.results.set(results);
  }

  clearResults() {
    this.results.set([]);
  }
}
