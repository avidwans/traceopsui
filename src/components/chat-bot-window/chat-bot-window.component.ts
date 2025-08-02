import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ErrorsService } from '../../services/errors.service';

@Component({
  selector: 'app-chat-bot-window',
  standalone: false,
  templateUrl: './chat-bot-window.component.html',
  styleUrl: './chat-bot-window.component.scss'
})
export class ChatBotWindowComponent {
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  userInput: string = '';
  visible = false;

  constructor(private errorService: ErrorsService){
   
  }

  sendMessage() {
    const input = this.userInput.trim();
    if (!input) return;

    this.messages.push({ sender: 'user', text: input });
    this.userInput = '';

    lastValueFrom(this.errorService.getQueryReply(input)).then(res =>{
       this.messages.push({
        sender: 'bot',
        text: res
      });
    })
  }

  toggleChat() {
    this.visible = !this.visible;
  }
}
