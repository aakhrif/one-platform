import { Component } from '@angular/core';
import { ModalComponent } from 'shared/ui/modal/modal.component';

@Component({
  selector: 'app-contact',
  template: `
    <app-modal [onClose]="close">
      <h3>Contact Form</h3>
      <form>
        <label>Name:<br><input type="text" name="name" /></label><br><br>
        <label>Email:<br><input type="email" name="email" /></label><br><br>
        <label>Message:<br><textarea name="message"></textarea></label><br><br>
        <button type="submit">Send</button>
      </form>
    </app-modal>
  `,
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ModalComponent],
})
export class ContactComponent {
  close = () => {
    history.replaceState(null, '', '/dashboard');
    window.location.hash = '';
    window.location.pathname = '/dashboard';
  };
}
