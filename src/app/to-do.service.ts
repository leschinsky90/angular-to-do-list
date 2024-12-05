import { Injectable } from '@angular/core';
import { IToDoList } from './i-to-do-list';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  todos: IToDoList[] = [];
  constructor() {}
  getTodos = () => {
    if (!this.todos.length === 0) {
      return 'Nothing';
    }
    return this.todos;
  };
}
