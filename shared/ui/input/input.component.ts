import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-input',
  template: `
    <label *ngIf="label" class="ui-input__label">{{ label }}</label>
    <input
      [type]="type"
      [placeholder]="placeholder"
      [class.ui-input--error]="error"
      [class.ui-input--focused]="focused"
      class="ui-input"
      [value]="value"
      (focus)="focused = true"
      (blur)="onTouched(); focused = false"
      (input)="onInput($event)"
      [attr.aria-invalid]="!!error"
      [attr.name]="name"
      [required]="required"
    />
    <div *ngIf="error" class="ui-input__error">{{ error }}</div>
  `,
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true,
    },
  ],
})
export class UiInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type = 'text';
  @Input() placeholder?: string;
  @Input() error?: string;
  @Input() name?: string;
  @Input() required?: boolean;
  @Output() valueChange = new EventEmitter<string>();
  focused = false;
  value?: string;

  onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.valueChange.emit(val);
    this.onChange(val);
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
