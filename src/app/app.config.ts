import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ExerciseSetsService } from './diary/services/exercise-sets.service';
import { provideToastr } from 'ngx-toastr';

import { authInterceptor } from './login/auth.interceptor';
import { hostInterceptor } from './shared/host.interceptor';
import { loadInterceptor } from './loading-overlay/load.interceptor';
import { notificationInterceptor } from './notification/notification.interceptor';
import { telemetryInterceptor } from './telemetry/telemetry.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        hostInterceptor,
        loadInterceptor,
        notificationInterceptor,
        telemetryInterceptor,
      ])
    ),
    provideAnimations(),
    provideToastr({ timeOut: 900, preventDuplicates: true }),
    ExerciseSetsService,
  ],
};
