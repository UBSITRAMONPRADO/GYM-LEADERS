import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
 
=======
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
>>>>>>> d9a905c71c4d0c798d1f1c1d4d6a3dd29bb8a8ca
