import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurateComponent } from './configurate.component';

const routes: Routes = [
  {path: '', component: ConfigurateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurateRoutingModule { }
