import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app/app.routes';
import { provideAuthService } from '@angular-workspace/auth/auth.service';

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    provideAuthService(),
  ],
}).catch((err) => console.error(err));
