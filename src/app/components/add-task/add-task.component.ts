import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { URL } from '../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  url: URL = new URL();

  addTask() {
    this.taskService
      .addTask(this.url)
      .subscribe((u) => this.router.navigate(['/urls']));
    // window.location.reload();
  }

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    //window.location.reload();
  }
}
