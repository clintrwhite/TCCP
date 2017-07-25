import { DashboardComponent } from './shop-app/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ShopAppService } from './shop-app/shop-app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopAppComponent } from './shop-app/shop-app.component';
import { SignInComponent } from './shop-app/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './shop-app/create-user/create-user.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'createUser', component: CreateUserComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopAppComponent,
    SignInComponent,
    CreateUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), HttpModule
  ],
  providers: [ShopAppService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
