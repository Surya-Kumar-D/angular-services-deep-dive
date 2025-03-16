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
     updateTask(taskId: string, status: TaskStatus) {
      this.tasks.update((prevTask)=>prevTask.map((task)=> task.id === taskId ? {...task,  status} : task) )
    }
  }

