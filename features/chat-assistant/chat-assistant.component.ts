import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'feature-chat-assistant',
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
})
export class ChatAssistantComponent {
  isOpen = false;
  message = '';
  messages: { from: 'user' | 'bot', text: string }[] = [
    { from: 'bot', text: 'Hallo! Wie kann ich helfen?' }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const text = this.message.trim();
    if (!text) return;
    this.messages.push({ from: 'user', text });
    this.message = '';
    // Hier könnte Bot-Logik folgen
  }
}
