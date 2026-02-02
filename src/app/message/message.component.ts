import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {

  // message that is coming from parent 
  @Input() message: string = '';

  // message type coming from parent
  @Input() type: 'success' | 'error' | '' = '';
}
