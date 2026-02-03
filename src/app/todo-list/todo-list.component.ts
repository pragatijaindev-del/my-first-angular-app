import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  todos: string[] = [];

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
