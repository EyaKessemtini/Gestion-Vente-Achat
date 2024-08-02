//<reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { LoginService } from './app/views/pages/login.service';
import { SidebarNavHelper } from '@coreui/angular';

bootstrapApplication(AppComponent, appConfig)

  .catch(err => console.error(err));

  