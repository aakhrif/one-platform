import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

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

  onQueryChange(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    console.log('query ', this.query());
  }
}
