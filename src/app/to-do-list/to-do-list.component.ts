import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
import { IToDoList } from '../i-to-do-list';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoListItemComponent, NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todos: IToDoList[] = [];

  todoListService: ToDoService = inject(ToDoService);

  constructor() {
    this.todos = this.todoListService.getTodos();
  }
}
