import { Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  template: `
    <div class="contact-page">
      <h1>Contact</h1>
      <p>If you have any questions, feedback, or need support, please use the form below or reach out via email.</p>
      <form>
        <label for="name">Name:</label>
        <input id="name" name="name" type="text" required>
        <label for="email">Email:</label>
        <input id="email" name="email" type="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  `,
  styleUrls: ['./contactpage.component.scss'],
  standalone: true,
})
export class ContactPageComponent {}
