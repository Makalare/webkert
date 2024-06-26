import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'configurate',
    loadChildren: () => import('./pages/configurate/configurate.module').then(m => m.ConfigurateModule)
  },
  { 
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },

  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
