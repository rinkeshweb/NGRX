import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login').then(c => c.Login) },
  { path: 'signup', loadComponent: () => import('./signup/signup').then(c => c.Signup) }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})

export class AuthModule {

}
