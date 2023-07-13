import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TaskService {    
    private serverUrl = 'http://10.0.0.11:8934/api/Tasks'

    constructor(private http:HttpClient){}

    createTask(task:Task):Observable<any>{
        task.dueDate = new Date();
        task.completed = false;
        return this.http.post(`${this.serverUrl}`, task)
    }

    
    updateTask(task:Task):Observable<any>{
        const formData: FormData = new FormData();
        formData.append('values', JSON.stringify({ completed: task.completed.toString()}));
        formData.append('key', task.idTask.toString());
        return this.http.put(`${this.serverUrl}/`, formData)
    }
    
    deleteTask(idTask:number):Observable<any>{
        const body: FormData = new FormData();
        body.append('key', idTask.toString());
        return this.http.delete(`${this.serverUrl}`, { body })
    }
}
