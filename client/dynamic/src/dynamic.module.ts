import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import {dynamicRouter} from './dynamic.router';
@NgModule({
  declarations: [
    DynamicComponent,
  ],
  imports: [
    dynamicRouter
  ]
})
export class DynamicModule { }
