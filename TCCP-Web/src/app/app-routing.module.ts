import { SignInComponent } from './shop-app/sign-in/sign-in.component';
import { CreateUserComponent } from './shop-app/create-user/create-user.component';
import { CustomerInfoComponent } from './shop-app/customer-info/customer-info.component';
import { DashboardComponent } from './shop-app/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'createUser', component: CreateUserComponent },
    { path: 'customerInfo/:id', component: CustomerInfoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }