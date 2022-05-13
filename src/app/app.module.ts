import { BrowserModule, Title } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { ReversePipe } from './reverse.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { WhyPageComponent } from './components/why-page/why-page.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaService } from './services/pwa.service';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TOSComponent } from './components/tos/tos.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';
import { Router } from '@angular/router';

Sentry.init({
  dsn: 'https://5f2c4369c4e04972b21a7d23537ec658@o1171884.ingest.sentry.io/6266816',
  denyUrls: ['https://hostm.io/urls', 'https://hostm.io/urls/'],
  integrations: [
    // Registers and configures the Tracing integration,
    // which automatically instruments your application to monitor its
    // performance, including custom Angular routing instrumentation
    new BrowserTracing({
      tracingOrigins: ['localhost', 'https://hostm.io/'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // beforeSend(event, hint) {
  //   // Check if it is an exception, and if so, show the report dialog
  //   if (event.exception) {
  //     Sentry.showReportDialog({
  //       eventId: event.event_id,
  //       title: "It looks like we're having issues",
  //       subtitle: 'Our team has been notified.',
  //       subtitle2:
  //         "If you'd like to help us fix this, please share the following information with our support team. If it is a 404 related; you do not need to fill out this form unless you know the page should exist.",
  //     });
  //   }
  //   return event;
  // },

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

@NgModule({
  declarations: [
    AppComponent,
    DisplayTaskComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    ReversePipe,
    ScrollTopComponent,
    RedirectComponent,
    HomeComponent,
    PagenotfoundComponent,
    BackButtonDirective,
    PricingComponent,
    FooterComponent,
    NavbarComponent,
    FeaturesComponent,
    WhyPageComponent,
    PrivacyPolicyComponent,
    TOSComponent,
    DisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ClipboardModule,
    NgbModule,
    HotToastModule.forRoot({
      reverseOrder: true,
      dismissible: true,
      autoClose: true,
      position: 'bottom-center',
      style: {
        border: '1px solid #000000',
        padding: '16px',
        color: '#000000',
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    Title,
    PwaService,
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
