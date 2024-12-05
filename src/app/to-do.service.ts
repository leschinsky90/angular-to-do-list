import { Injectable } from '@angular/core';
import { IToDoList } from './i-to-do-list';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  todos: IToDoList[] = [
    {
      id: 1,
      userId: 5,
      title: 'jdwr',
      completed: false,
    },
    {
      id: 2,
      userId: 6,
      title: 'hte',
      completed: false,
    },
    {
      id: 3,
      userId: 3,
      title: 'gegew',
      completed: true,
    },
  ];
  constructor() {}
  getTodos = () => {
    if (this.todos.length === 0) {
      console.log('Nothing');
      return [];
    }
    return this.todos;
  };
}
