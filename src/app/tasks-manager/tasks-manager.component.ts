import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task';
import { TaskService } from '../shared/services/task.service';
import { CompletedTasksService } from '../shared/services/completed-tasks.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrls: ['./tasks-manager.component.scss'],
})
export class TasksManagerComponent implements OnInit{
  tasks: Task[] = [];
  taskDescriptionControl:FormControl =new FormControl(null, {
    validators: [Validators.required]
  })

  constructor(private taskService:TaskService, private taskCompleted:CompletedTasksService ){

  }
  ngOnInit(): void {
    this.loadTasks();
  }

  changeOptionValue(event:any, task:Task){    
    this.taskService.updateTask({completed: event.checked, idTask: task.idTask} as Task).subscribe(resp => {
      task.completed = event.checked;
      this.taskCompleted.updateTasks(this.tasks.filter(e => e.completed))
    });
  }

  save(){
    if (!this.taskDescriptionControl.valid) {
      this.taskDescriptionControl.markAllAsTouched();
      return;
    }
    this.taskService.createTask({
      taskDescription: this.taskDescriptionControl.value
    }as Task).subscribe(result => {      
      this.taskDescriptionControl.reset();
      this.loadTasks();
    });
  }

  deleteTask(idTask:number){
    this.taskService.deleteTask(idTask).subscribe(resp => this.loadTasks());
  }

  

  private loadTasks() {
    this.taskService.getTasks().subscribe(resp => {
      this.tasks = resp.data;
      if (this.tasks.length > 0) {
        this.taskCompleted.updateTasks(this.tasks.filter(e => e.completed));
      }
    });
  }

}
