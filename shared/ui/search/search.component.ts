import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [FormsModule, NgClass],
})
export class SearchComponent {
  query = '';
  @Output() search = new EventEmitter<string>();
  focused = false;

  onSearch() {
    this.search.emit(this.query);
  }
}
