import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SigInComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                component: SigInComponent,
                data: {
                    title: 'Sign in'
                } 
            },
            {
                path: 'signup',
                component: SingupComponent,
                data: {
                    title: 'Sing up'
                } 
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
