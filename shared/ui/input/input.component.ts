import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-input',
  template: `
    <label *ngIf="label" class="ui-input__label">{{ label }}</label>
    <input
      [type]="type"
      [placeholder]="placeholder"
      [ngClass]="{ 'ui-input--error': error, 'ui-input--focused': focused }"
      class="ui-input"
      [value]="value"
      (focus)="focused = true"
      (blur)="focused = false"
      (input)="onInput($event)"
      [attr.aria-invalid]="!!error"
    />
    <div *ngIf="error" class="ui-input__error">{{ error }}</div>
  `,
  styleUrls: ['./input.component.scss'],
  standalone: true,
})
export class UiInputComponent {
  @Input() label?: string;
  @Input() type = 'text';
  @Input() placeholder?: string;
  @Input() value?: string;
  @Input() error?: string;
  @Output() valueChange = new EventEmitter<string>();
  focused = false;

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }
}
