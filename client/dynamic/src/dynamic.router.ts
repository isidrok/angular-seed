import { RouterModule, Routes } from '@angular/router';
import {DynamicComponent} from './dynamic.component';

const dynamicRoutes: Routes = [
  { path: '', component: DynamicComponent },
];

export const dynamicRouter = RouterModule.forChild(dynamicRoutes);
