import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { counterReducer } from './app/sidebar_menu/counter.reducer';
//import { counterReducer } from './app/sidebar_menu/global-state/counter.reducer'; // 👈 your reducer

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers || [],
    provideStore({ counter: counterReducer }) // 👈 register store here
  ]
}).catch((err) => console.error(err));