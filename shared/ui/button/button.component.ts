import { Component, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'ui-button',
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [ngClass]="[variant, size, class]"
      [ngStyle]="style"
      (click)="clicked.emit($event)"
      (mousemove)="onMouseMove($event)"
      (mouseleave)="onMouseLeave()"
      (focus)="onFocus($event)"
      (blur)="onBlur()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() class = '';
  @Input() style: Record<string, string> | null = null;
  @Output() clicked = new EventEmitter<Event>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  setSpotlight(x: number, y: number) {
    const btn = this.el.nativeElement.querySelector('button');
    if (btn) {
      this.renderer.setStyle(btn, '--x', `${x}px`);
      this.renderer.setStyle(btn, '--y', `${y}px`);
    }
  }

  onMouseMove(event: MouseEvent) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.setSpotlight(event.clientX - rect.left, event.clientY - rect.top);
  }

  onMouseLeave() {
    this.setSpotlight(-9999, -9999);
  }

  onFocus(event: FocusEvent) {
    const btn = event.target as HTMLElement;
    const rect = btn.getBoundingClientRect();
    // Center the spotlight on focus
    this.setSpotlight(rect.width / 2, rect.height / 2);
  }

  onBlur() {
    this.setSpotlight(-9999, -9999);
  }
}
