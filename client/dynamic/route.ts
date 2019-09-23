import {RouterRegistry} from '@mv/router-registry';

RouterRegistry.register({
  path: 'dynamic',
  loadChildren: () => import('./src/dynamic.module').then(mod => mod.DynamicModule),
});
