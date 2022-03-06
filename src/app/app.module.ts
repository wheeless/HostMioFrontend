import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { ReversePipe } from './reverse.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTaskComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    ReversePipe,
    ScrollTopComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatSliderModule, MatProgressSpinnerModule, MatProgressBarModule, ClipboardModule, NgbModule, JwPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
