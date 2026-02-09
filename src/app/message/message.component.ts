// this component is responsible for displaying feedback messages that are passed from parent component

import { Component, Input } from '@angular/core';

@Component({
  // allows reuse  anywhere in app
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {
// parnet child communication,parent controls data child only consume and display it
  @Input() message = '';
  @Input() type: 'success' | 'error' | '' = '';
}
