import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css',
})
export class ToDoListItemComponent {
  toDoListItem = {
    userId: 1,
    id: 1,
    title: 'hrfd sdkfgd gd',
    completed: false,
  };
}
