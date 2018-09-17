import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminBloodAddComponent } from './components/blood/admin-blood-add/admin-blood-add.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewEventComponent } from './components/event/view-event/view-event.component';
import { ViewBloodComponent } from './components/blood/view-blood/view-blood.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { HomeComponent } from './components/home/home.component';
import { BloodRequestComponent } from './components/blood-request/blood-request.component';
import { ViewBloodCountComponent } from './components/view-blood-count/view-blood-count.component';
import { LoginComponent } from './components/login/login/login.component';
import { AppHttpInterceptor } from './app-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    AdminBloodAddComponent,
    AddUserComponent,
    AddEventComponent,
    ViewEventComponent,
    ViewBloodComponent,
    ViewUserComponent,
    HomeComponent,
    BloodRequestComponent,
    ViewBloodCountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:  [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
