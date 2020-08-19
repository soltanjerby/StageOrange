import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: "login",
            component: LoginComponent,
          },
          {
            path: "register",
            component: RegisterComponent,
          },
        ],
    },
    {
      path: "home",
      redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
