import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html'
})
export class CreateTodoComponent {

  todoText: string = '';

  @Output() addTodoEvent = new EventEmitter<string>();

  addTodo() {
    if (this.todoText) {
      this.addTodoEvent.emit(this.todoText);
      this.todoText = '';
    }
  }
}
