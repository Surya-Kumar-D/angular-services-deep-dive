  import {Injectable, signal} from '@angular/core';
  import {Task, TaskStatus} from "./task.model";



  @Injectable({
    providedIn: 'root'
  })
  export class TaskService {
   private tasks= signal<Task[]>([]);
   allTasks = this.tasks.asReadonly();
    constructor() { }

    addTask(task: Pick<Task, 'title'| 'description'>) {
      const newTask: Task = {
        ...task,
        id: Math.random().toString(),
        status: 'OPEN'
      }
      this.tasks.update((prevTask)=> [...prevTask, newTask]);
    }
    removeTask(taskId:string) {
      //   this.tasks() = this.tasks().filter((task: Task)=> task.id !==taskId);
      // }
      // updateTask(taskId: string, status: TaskStatus ) {
      //   this.tasks() = this.tasks().map((task:Task)=> task.id === taskId ? {...task, status: status} : task)
    }
  }

