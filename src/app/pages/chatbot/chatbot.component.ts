import { Component, NgModule } from '@angular/core';
import { GeminiService } from '../../data/services/gemini.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  userInput: string = '';
  geminiResponse: string = '';
}
