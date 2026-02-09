import { Component } from '@angular/core';
// defines  shape of todo
interface Todo {
  text: string;
  completed: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
// holds entire todo list
  todos: Todo[] = [];

  addTodo(text: string): void {
    this.todos.push({
      text,
      completed: false,
      editing: false
    });
  }

  toggleTodo(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }

  editTodo(index: number): void {
    this.todos[index].editing = true;
  }

  saveTodo(index: number): void {
    this.todos[index].editing = false;
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
