import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
import { Todos } from '../todos';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoListItemComponent, NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todos: Todos[] = [];
  fetchTodos = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' })
      .then((data) => data.json())
      .then((arr) => {
        for (const el of arr) {
          const obj: Todos = {
            userId: el.userId,
            id: el.id,
            title: el.title,
            completed: el.completed,
          };
          this.todos.push(obj);
        }
      });
  };
}
