import { Component } from '@angular/core';
import { Task } from '../shared/models/task';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrls: ['./tasks-manager.component.scss']
})
export class TasksManagerComponent {
  tasks: Task[] = [];

  constructor(private taskService:TaskService ){

  }
}
