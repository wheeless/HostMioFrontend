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
    data: {
      title: 'Links',
    },
  },
  {
    path: 'add',
    component: AddTaskComponent,
    data: {
      title: 'Add Link',
    },
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'Pricing',
    },
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: {
      title: 'Features',
    },
  },
  {
    path: 'why-hostmio',
    component: WhyPageComponent,
    data: {
      title: 'Why HostMio?',
    },
  },
  {
    path: 'policy',
    component: PrivacyPolicyComponent,
    data: {
      title: 'Privacy Policy',
    },
  },
  {
    path: 'tos',
    component: TOSComponent,
    data: {
      title: 'Terms of Service',
    },
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
    data: {
      title: 'Disclaimer',
    },
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    data: {
      title: 'Redirecting...',
    },
  },
  {
    path: 'details/:shortUrl',
    component: TaskDetailsComponent,
    data: {
      title: 'Link Details',
    },
  },
  {
    path: '404',
    // pathMatch: 'full',
    component: PagenotfoundComponent,
    data: {
      title: 'Page Not Found',
    },
  },
  {
    path: ':shortUrl',
    component: RedirectComponent,
    data: {
      title: 'Redirecting...',
    },
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
