import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotService, FaqNode } from './chat-bot.service';

@Component({
  selector: 'feature-chat-assistant',
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ChatAssistantComponent {
  isOpen = false;
  conversation: { from: 'bot' | 'user', text: string }[] = [
    { from: 'bot', text: 'Wie kann ich helfen? Wähle eine Frage:' }
  ];
  currentFaqs: FaqNode[];

  constructor(private chatBot: ChatBotService) {
    this.currentFaqs = this.chatBot.faqs;
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  selectFaq(faq: FaqNode) {
    this.conversation.push({ from: 'user', text: faq.question });
    this.conversation.push({ from: 'bot', text: faq.answer });
    this.currentFaqs = faq.followUps || this.chatBot.faqs;
  }
}
