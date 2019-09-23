import { RouterModule, Routes } from '@angular/router';
import {RouterRegistry} from '@mv/router-registry';
import {HomeComponent} from './home.component';

const context = (require as any).context('../../', true, /\/route\.ts$/);
context.keys().forEach(context);

const appRoutes: Routes = [
  ...RouterRegistry.routes,
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const appRouter = RouterModule.forRoot(appRoutes);
