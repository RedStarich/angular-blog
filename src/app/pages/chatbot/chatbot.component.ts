import { Component, NgModule } from '@angular/core';
import { GeminiService } from '../../data/services/gemini.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  userInput: string = '';
  geminiResponse: string = '';
  constructor(private geminiService: GeminiService) {}
  isLoading: boolean = false;

  async sendMessage() {
    if (this.userInput.trim()) {
      this.isLoading = true;
      this.geminiService.getGeminiResponse(this.userInput).subscribe(response => {
        this.geminiResponse = response;
        this.userInput = '';
        this.isLoading = false;
      });
    }
  }
}
