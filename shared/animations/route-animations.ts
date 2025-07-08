import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = [
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('600ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'none' })),
    ]),
  ]),
];
