import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { URL } from '../../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { of } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  detailTask: URL = new URL();
  // urls: URL = new URL();
  tasks: URL[];

  // getTasks(): void {
  //   this.taskService.getTasks().subscribe((t) => (this.tasks = t));
  // }

  patchExpireDate(shortUrl: string): void {
    this.taskService
      .patchExpireDate(shortUrl)
      .subscribe((url) => (this.detailTask = url));
  }

  deleteTask(_id: number): void {
    this.taskService
      .deleteTask(_id)
      .subscribe((t) => this.router.navigate(['urls']));
    //this.warnToast('Link Deleted');
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

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.taskService
        .getTask(param.shortUrl)
        .subscribe((t) => (this.detailTask = t));
    });
  }
}
