import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TaskService } from '../app/services/task.service';
//import { TaskModule } from './modules/task/task.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
//import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayTaskComponent,
    AddTaskComponent,
    TaskDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
