import { ApplicationConfig, InjectionToken, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  

import { routes } from './app.routes';

export const TRIPPIN_BASE_URL = new InjectionToken<string>('TRIPPIN_BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: TRIPPIN_BASE_URL,
      useValue: 'https://services.odata.org/Trippinrestierservice/(S(l541tqt3z5um4rawl52oawae))/'
    }, 
    importProvidersFrom(HttpClientModule)
    // or you could use provideHttpClient() here
  ],
};
