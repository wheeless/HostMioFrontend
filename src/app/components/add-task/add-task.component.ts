import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { URL } from '../../models/task';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DisplayTaskComponent } from '../display-task/display-task.component';
import { AddLinkServiceService } from '../../services/add-link-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  url: URL = new URL();

  warnToast(message) {
    this.toast.warning(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  sendForAdd() {
    if (this.url.longUrl === undefined || this.url.longUrl === '') {
      this.warnToast('Please enter a valid URL...');
    } else {
      //this.addTask();
      this.addTaskService.sendForAdd(this.url);
    }
  }

  constructor(
    private toast: HotToastService,
    private addTaskService: AddLinkServiceService
  ) {}

  ngOnInit() {
    //window.location.reload();
  }
}
