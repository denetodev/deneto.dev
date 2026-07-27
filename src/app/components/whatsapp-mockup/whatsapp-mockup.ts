import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

interface Message {
  from: 'client' | 'agent';
  text: string;
  time: string;
}

@Component({
  selector: 'app-whatsapp-mockup',
  imports: [NgFor, NgClass],
  templateUrl: './whatsapp-mockup.html',
  styleUrl: './whatsapp-mockup.scss',
})

export class WhatsappMockup {
  @Input() agentName = 'Agente';
  @Input() agentLabel = 'Agente IA';
  @Input() messages: Message[] = [];
}
