import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatBotService } from './chat-bot.service';

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
  lastSent = 0;
  maxLength = 200;
  error = '';

  constructor(private chatBot: ChatBotService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const text = this.message.trim();
    const now = Date.now();
    this.error = '';
    if (!text) {
      this.error = 'Bitte gib eine Nachricht ein.';
      return;
    }
    if (text.length > this.maxLength) {
      this.error = `Maximal ${this.maxLength} Zeichen erlaubt.`;
      return;
    }
    if (now - this.lastSent < 1000) {
      this.error = 'Bitte warte einen Moment, bevor du erneut sendest.';
      return;
    }
    this.messages.push({ from: 'user', text });
    this.message = '';
    this.lastSent = now;
    // Bot-Antwort generieren
    setTimeout(() => {
      const reply = this.chatBot.getBotReply(text);
      this.messages.push({ from: 'bot', text: reply });
    }, 500);
  }
}
