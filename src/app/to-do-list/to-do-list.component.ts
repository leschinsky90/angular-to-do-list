import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoListItemComponent, NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todos = [
    {
      userId: 1,
      id: 1,
      title: 'hr sfas dfs gd',
      completed: false,
    },
    {
      userId: 3,
      id: 2,
      title: 'hrfd sdkfgd gd',
      completed: true,
    },
    {
      userId: 5,
      id: 3,
      title: 'hrfd sdkfgd gd',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'hrffgrweh',
      completed: false,
    },
    {
      userId: 8,
      id: 5,
      title: 'hrfd bfds gd',
      completed: false,
    },
  ];
}
