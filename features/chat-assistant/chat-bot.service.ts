import { Injectable } from '@angular/core';

export interface FaqNode {
  question: string;
  answer: string;
  followUps?: FaqNode[];
}

@Injectable({ providedIn: 'root' })
export class ChatBotService {
  readonly faqs: FaqNode[] = [
    {
      question: 'Wie funktioniert der Login?',
      answer: 'Für den Login nutze bitte einen Demo-User. Bei Problemen melde dich!'
    },
    {
      question: 'Ich brauche Hilfe zur Plattform',
      answer: 'Du kannst mir Fragen zur Plattform stellen oder Feedback geben.'
    },
    {
      question: 'Wie kann ich das Dashboard nutzen?',
      answer: 'Das Dashboard ist nach dem Login verfügbar und zeigt dir alle wichtigen Infos.'
    },
    {
      question: 'Kontakt & Support',
      answer: 'Du erreichst den Support über das Kontaktformular oder per E-Mail.'
    },
    {
      question: 'Danke!',
      answer: 'Gern geschehen!'
    }
  ];

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
