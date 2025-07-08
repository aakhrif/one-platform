import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class SearchComponent {
  query = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.query);
  }
}
