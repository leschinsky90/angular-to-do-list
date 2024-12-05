import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
import { IToDoList } from '../i-to-do-list';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoListItemComponent, NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todos: IToDoList[] = [];
  constructor() {
    
  }
  getTodos = () => {
    console.log();
  };
}
