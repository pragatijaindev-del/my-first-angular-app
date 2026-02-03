import { Component } from '@angular/core';
// this is the root component of angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
