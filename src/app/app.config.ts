import {
  ApplicationConfig,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { LucideAngularModule, Linkedin, Github, ArrowUp } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideExperimentalZonelessChangeDetection(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Linkedin,
        Github,
        ArrowUp,
      })
    ),
  ],
};
