import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { LoginComponent } from '../../../features/auth/login/login.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'feature-start',
  template: `
    <div class="feature-start">
      <div class="feature-start__left" [@bookPageLeft]>
        <app-login></app-login>
      </div>
      <div class="feature-start__right" [@bookPageRight]>
        <h1>{{ t$('start.headline')() }}</h1>
        <p>{{ t$('start.desc1')() }}</p>
        <p>{{ t$('start.desc2')() }}</p>
        <p>{{ t$('start.desc3')() }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./feature-start.component.scss'],
  animations: [
    trigger('bookPageLeft', [
      transition(':enter', [
        animate('1800ms cubic-bezier(0.77,0,0.175,1)', keyframes([
          style({
            transform: 'perspective(1200px) rotateY(90deg) scale(0.8) translateY(40px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'perspective(1200px) rotateY(0deg) scale(1.02) translateY(-8px)',
            opacity: 0.92,
            offset: 0.7
          }),
          style({
            transform: 'perspective(1200px) rotateY(0deg) scale(1) translateY(0)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ]),
    trigger('bookPageRight', [
      transition(':enter', [
        animate('1800ms cubic-bezier(0.77,0,0.175,1)', keyframes([
          style({
            transform: 'perspective(1200px) rotateY(-90deg) scale(0.8) translateY(40px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'perspective(1200px) rotateY(0deg) scale(1.02) translateY(-8px)',
            opacity: 0.92,
            offset: 0.7
          }),
          style({
            transform: 'perspective(1200px) rotateY(0deg) scale(1) translateY(0)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ])
  ],
  standalone: true,
  imports: [LoginComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureStartComponent {
  private translation = inject(TranslationService);

  t$ = (key: string) => this.translation.translate(key);

}
