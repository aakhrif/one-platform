import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatBotService {
  getBotReply(userMessage: string): string {
    const msg = userMessage.toLowerCase();
    if (msg.includes('hallo') || msg.includes('hi')) {
      return 'Hallo! Wie kann ich dir helfen?';
    }
    if (msg.includes('hilfe') || msg.includes('support')) {
      return 'Du kannst mir Fragen zur Plattform stellen oder Feedback geben.';
    }
    if (msg.includes('login')) {
      return 'Für den Login nutze bitte einen Demo-User. Bei Problemen melde dich!';
    }
    if (msg.includes('danke')) {
      return 'Gern geschehen!';
    }
    if (msg.length < 10) {
      return 'Kannst du deine Frage bitte etwas genauer formulieren?';
    }
    return 'Das habe ich leider nicht verstanden. Bitte stelle deine Frage anders oder kontaktiere den Support.';
  }
}
