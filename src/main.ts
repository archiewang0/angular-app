import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// 這裡成為引入口 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
