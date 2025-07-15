import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app/app.routes';
import { provideAuthService } from '@angular-workspace/auth/auth.service';
import { provideStore } from '@ngrx/store';
import { APP_CONFIG } from 'shared/tokens/app-config.token';
import { environment } from './environments/environment';
import { provideAppInitializer, inject } from '@angular/core';
import { TranslationService } from 'shared/services/translation.service';
import { translationInitializerFactory } from 'shared/app-initializer/translation.initializer';

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    provideAuthService(),
    provideStore(),
    { provide: APP_CONFIG, useValue: { showBanner: environment.showBanner } },
    provideAppInitializer(() => translationInitializerFactory(inject(TranslationService))),
  ],
}).catch((err) => console.error(err));
