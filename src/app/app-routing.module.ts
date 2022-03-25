import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FeaturesComponent } from './components/features/features.component';
import { WhyPageComponent } from './components/why-page/why-page.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TOSComponent } from './components/tos/tos.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

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
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'why-hostmio',
    component: WhyPageComponent,
  },
  {
    path: 'policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'tos',
    component: TOSComponent,
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
  {
    path: 'details/:shortUrl',
    component: TaskDetailsComponent,
  },
  {
    path: '404',
    // pathMatch: 'full',
    component: PagenotfoundComponent,
  },
  {
    path: ':shortUrl',
    component: RedirectComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/404',
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
