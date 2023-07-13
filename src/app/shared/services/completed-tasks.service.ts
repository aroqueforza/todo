import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})
export class CompletedTasksService{

    _taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])

    constructor(){}

    updateTasks(tasks:Task[]){
        this._taskSubject.next(tasks);
    }

    
    public get tasksCompleted() : Task[] {
        return this._taskSubject.value;
    }
    
}