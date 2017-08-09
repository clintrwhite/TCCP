import { DashboardComponent } from './shop-app/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ShopAppService } from './shop-app/shop-app.service';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopAppComponent } from './shop-app/shop-app.component';
import { SignInComponent } from './shop-app/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './shop-app/create-user/create-user.component';
import { CustomerInfoComponent } from './shop-app/customer-info/customer-info.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninLogComponent } from './shop-app/signin-log/signin-log.component';
import { AdminComponent } from './shop-app/admin/admin.component';
import { RedeemHoursComponent } from './shop-app/redeem-hours/redeem-hours.component';
import { ShopItemsComponent } from './shop-app/Admin/shop-items/shop-items.component';
import { HoursEditComponent } from './shop-app/Admin/hours-edit/hours-edit.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopAppComponent,
    SignInComponent,
    CreateUserComponent,
    DashboardComponent,
    CustomerInfoComponent,
    SigninLogComponent,
    AdminComponent,
    RedeemHoursComponent,
    ShopItemsComponent,
    HoursEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [ShopAppService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
