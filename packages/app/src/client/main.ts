import './polyfills';

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

async function init(): Promise<void> {
  if ((await environment)?.production) {
    enableProdMode();
  }

  bootstrapApplication(AppComponent, {
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideIonicAngular(), provideRouter(routes, withPreloading(PreloadAllModules))],
  }).catch((err) => {
    console.error('### !!! MAIN ERROR', err);

    throw new Error(
      JSON.stringify({
        message: '### !!! MAIN ERROR',
        error: err,
      })
    );
  });
}

init();
