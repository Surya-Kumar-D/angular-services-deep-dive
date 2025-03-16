import {Injectable, signal} from '@angular/core';
import {Task, TaskStatus} from "./task.model";



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks= signal<Task[]>([]);
  constructor() { }

  addTask(task: Task) {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((prevTask)=> [...prevTask, newTask]);
  }
  removeTask(taskId:string) {
    this.tasks() = this.tasks().filter((task: Task)=> task.id !==taskId);
  }
  updateTask(taskId: string, status: TaskStatus ) {
    this.tasks() = this.tasks().map((task:Task)=> task.id === taskId ? {...task, status: status} : task)
  }

}

