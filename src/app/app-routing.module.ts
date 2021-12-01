import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

//manully imported
import { RouterModule, Routes } from '@angular/router';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/urls',
    pathMatch: 'full',
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
    path: 'detail/:id',
    component: TaskDetailsComponent,
  },
  // {
  //   path: '/:shortURL',
  //   loadChildren: () => new Promise( () => { if(window.location.href.match(/external-link/) ) window.location.href = 'https://external-link.com/'; } )
  // },
  
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
