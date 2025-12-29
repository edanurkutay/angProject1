import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) // root component AppComponent olarak ayarlanmış
  .catch((err) => console.error(err));
