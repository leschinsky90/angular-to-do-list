import { Component, Input } from '@angular/core';
import { IToDoList } from '../i-to-do-list';
import { ToDoListItem } from '../todo-list-item';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css',
})
export class ToDoListItemComponent {
  @Input() toDoListItem!: any;
}
