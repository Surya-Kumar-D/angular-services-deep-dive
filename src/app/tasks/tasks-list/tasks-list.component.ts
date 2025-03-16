import {Component, inject, signal} from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  taskService = inject(TaskService);
  tasks: Task[] = [];

  constructor() {
     this.tasks = this.taskService.tasks;
  }

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
