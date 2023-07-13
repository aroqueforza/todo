import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CompletedTasksService } from '../shared/services/completed-tasks.service';
import { Task } from '../shared/models/task';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports:[MatToolbarModule, MatIconModule  ]
})
export class ToolbarComponent implements OnInit{
  
  tasksComptedCount:number = 0;

  constructor(private completedTasksService: CompletedTasksService){

  }

  ngOnInit(): void {
    this.completedTasksService._taskSubject.subscribe(tasks =>{
      this.tasksComptedCount = tasks.length;
    })
  }

  
}
