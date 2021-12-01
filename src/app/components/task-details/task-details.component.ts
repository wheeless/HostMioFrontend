import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { URL } from '../../models/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  detailTask: URL = new URL();
  tasks: URL[];

  getTasks(): void {
    this.taskService.getTasks().subscribe((t) => (this.tasks = t));
  }

  deleteTask(id: number): void {
    this.taskService
      .deleteTask(id)
      .subscribe((t) => this.router.navigate(['task']));
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.params.subscribe((param) => {
    //   this.taskService
    //     .getTask(+param.id)
    //     .subscribe((t) => (this.detailTask = t));
    // });
  }
}
