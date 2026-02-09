  //this is the child component which is responsible to take inout from user and validate it
  //emit todo value to its parent component and reset input after submission
  import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html'
})
export class CreateTodoComponent { // holds state and contains behaviour acts as contoller for template

  todoText = ''; // stores current input value  

  @Output() addTodoEvent = new EventEmitter<string>(); //eventEmitter  only can be used with @Output

  addTodo(): void {
    if (!this.todoText.trim()) return; // prevents empty or whitespace todos

    this.addTodoEvent.emit(this.todoText); // it will send the text to todo
    this.todoText = '';
  }     
}
