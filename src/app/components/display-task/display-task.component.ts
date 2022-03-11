import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/app/models/task';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
//import { TaskModule } from '../../modules/task/task.module';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css'],
  styles: [
    `
      :host .alert-custom {
        color: white;
        background-color: orange;
        border-color: #800040;
      }
    `,
  ],
})
export class DisplayTaskComponent implements OnInit {
  //Creating a model to handle our new task inputs
  urls: URL[];
  url: URL = new URL();
  pageOfItems: Array<any>;
  public fg: FormGroup;
  // transform(value) {
  //   return value.slice().reverse();
  // }
  getTasks(): void {
    this.taskServer.getTasks().subscribe((url) => (this.urls = url));
  }
  deleteTask(_id: number): void {
    this.taskServer.deleteTask(_id).subscribe((url) => this.getTasks());
  }
  addTask() {
    this.taskServer.addTask(this.url).subscribe((u) => this.getTasks());
    this.url.longUrl = '';
    this.url.shortUrl = '';
    // window.location.reload();
  }
  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  // getTask(shortUrl: string): void {
  //   this.taskServer
  //     .getTask(shortUrl)
  //     .subscribe((t) => this.router.navigate(['task']));
  // }

  constructor(
    private taskServer: TaskService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.fg = fb.group({
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
  }
  get getUrl() {
    return this.fg.controls;
  }
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
}
