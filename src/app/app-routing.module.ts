import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

//manully imported
import { RouterModule, Routes } from '@angular/router';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/urls',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'urls',
    component: DisplayTaskComponent,
  },
  {
    path: 'add',
    component: AddTaskComponent,
  },
  {
    path: 'edit/:id',
    component: TaskDetailsComponent,
  },
  { 
    path: '404', pathMatch: 'full', 
    component: PagenotfoundComponent 
  },
  {
    path: ':shortUrl',
    component: RedirectComponent,
  },
  { 
    path: '**', pathMatch: 'full', 
    component: PagenotfoundComponent 
  },

  
];
// @Injectable({
//   providedIn: 'root'
// })
// export class RedirectGuard implements CanActivate {

// constructor(private router: Router) {}

// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

//     window.location.href = route.data['externalUrl'];
//     return true;

// }
// }
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
