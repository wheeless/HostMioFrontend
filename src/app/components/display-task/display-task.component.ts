import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/app/models/task';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { from } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
//import { TaskModule } from '../../modules/task/task.module';


@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css'],
})



export class DisplayTaskComponent implements OnInit {
  
  //Creating a model to handle our new task inputs
  urls: URL[];
  transform(value) {
    return value.slice().reverse();
  }
  getTasks(): void {
    this.taskServer.getTasks().subscribe((url) => (this.urls = url));
  }
  deleteTask(_id: number): void {
    this.taskServer.deleteTask(_id).subscribe((url) => this.getTasks());
    
  }
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  // getTask(shortUrl: string): void {
  //   this.taskServer
  //     .getTask(shortUrl)
  //     .subscribe((t) => this.router.navigate(['task']));
  // }
  // private taskRoute = 'http://localhost:3000/Tasks';
  // public tasks: Task[];
  // dataService: TaskService;

  constructor(private taskServer: TaskService, private router: Router) {}

  // getTasks() {
  //   //when callthing this you need to
  //   //specify what data types we expect to get from this route.
  //   //We then pass that data type in as a perameter of the method like <Task[]>
  //   this.http.get<Task[]>(this.taskRoute).subscribe((listTask) => {
  //     this.tasks = listTask;
  //     console.log('task:', this.tasks);
  //   });
  // }

  ngOnInit() {
    this.getTasks();
    
  }
  // onSubmit() {
  //   // for (let i = 0; i < Task.length; i++) {
  //   //   console.log(Task[i].id);
  //   // }
  //   // return (document.getElementById('showTask').innerHTML =
  //   //   this.task.taskName + ' ' + this.task.taskDue);
  //   this.http.post(this.taskRoute, this.task).subscribe((res: Response) => {
  //     this.router.navigate(['task']);
  //   });
  //   window.location.reload();
  // }
}
