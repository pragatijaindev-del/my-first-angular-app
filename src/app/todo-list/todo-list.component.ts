import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  todos: { text: string; completed: boolean }[] = [];

  addTodo(todo: string) {
    this.todos.push({
      text: todo,
      completed: false
    });
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
