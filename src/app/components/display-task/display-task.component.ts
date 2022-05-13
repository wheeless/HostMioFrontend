import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/app/models/task';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

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
  urls: URL[];
  url: URL = new URL();
  pageOfItems: Array<any>;
  public fg: FormGroup;
  isCopied;
  loading = false;

  getTasks(): void {
    this.taskServer.getTasks().subscribe((url) => (this.urls = url));
  }
  // getTask(shortUrl: string): void {
  //   this.taskServer.getTask(shortUrl).subscribe((url) => (this.url = url));
  // }
  // getTask(shortUrl: string): void {
  //   this.taskServer
  //     .getTask(shortUrl)
  //     .subscribe((t) => this.router.navigate(['task']));
  // }
  deleteTask(_id: number): void {
    this.taskServer.deleteTask(_id).subscribe((url) => this.getTasks());
  }

  reloadLinks(): void {
    this.getTasks();
  }

  sendForAdd() {
    if (this.url.longUrl === undefined || this.url.longUrl === '') {
      this.warnToast('Please enter a valid URL');
    } else {
      this.addTask();
    }
  }

  addTask() {
    this.taskServer.addTask(this.url).subscribe((u) => this.getTasks());
    this.url.longUrl = '';
    this.url.shortUrl = '';
  }

  successToast(message) {
    this.toast.success(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  infoToast(message) {
    this.toast.info(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  failToast(message) {
    this.toast.error(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  warnToast(message) {
    this.toast.warning(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  constructor(
    private taskServer: TaskService,
    private router: Router,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}
  // get getUrl() {
  //   return this.fg.controls;
  // }
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
