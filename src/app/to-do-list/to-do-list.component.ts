import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todos = {
    userId: 1,
    id: 1,
    title: 'hrfd sdkfgd gd',
    completed: false,
  };
}
