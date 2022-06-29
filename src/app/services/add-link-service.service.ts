import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { URL } from '../models/task';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { BehaviorSubject } from 'rxjs';
import { DisplayTaskComponent } from '../../app/components/display-task/display-task.component';
@Injectable({
  providedIn: 'root',
})
export class AddLinkServiceService {
  url: URL = new URL();
  urls: URL[];
  private callGetTasks = new BehaviorSubject(this.taskServer.getTasks());
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
  sendForAdd(url: any) {
    if (url.longUrl === undefined || url.longUrl === '') {
      this.warnToast('Please enter a valid URL..');
      console.log(url.longUrl);
    } else {
      this.addTask(url);
    }
  }
  addTask(url: any) {
    this.taskServer.addTask(url).subscribe((urls) => this.getTasks(urls));
    console.log(url);

    url.longUrl = '';
    url.shortUrl = '';
  }
  getTasks(urls): void {
    this.taskServer.getTasks().subscribe((url) => (urls = url));
  }
  constructor(
    private router: Router,
    private toast: HotToastService,
    private taskServer: TaskService
  ) {}
}
