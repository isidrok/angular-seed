import 'core-js';
import 'zone.js/dist/zone';
import { platformBrowser }    from '@angular/platform-browser';
import { AppModule } from '@mv/app';

platformBrowser().bootstrapModule(AppModule);
