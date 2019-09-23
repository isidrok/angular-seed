import { Routes } from '@angular/router';

export class RouterRegistry {
  static routes: Routes = [];
  static register(...routes: Routes) {
    this.routes.push(...routes);
  }
}
