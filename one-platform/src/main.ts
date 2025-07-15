import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app/app.routes';
import { provideAuthService } from '@angular-workspace/auth/auth.service';
import { provideStore } from '@ngrx/store';

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    provideAuthService(),
    provideStore()
],
}).catch((err) => console.error(err));
