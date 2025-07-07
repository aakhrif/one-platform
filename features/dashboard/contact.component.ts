import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="modal-content">
      <h3>Contact Form</h3>
      <form>
        <label>Name:<br><input type="text" name="name" /></label><br><br>
        <label>Email:<br><input type="email" name="email" /></label><br><br>
        <label>Message:<br><textarea name="message"></textarea></label><br><br>
        <button type="submit">Send</button>
      </form>
    </div>
  `,
  styleUrls: ['./contact.component.scss'],
  standalone: true,
})
export class ContactComponent {}
