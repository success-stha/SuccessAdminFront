import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminBloodAddComponent } from './components/blood/admin-blood-add/admin-blood-add.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { ViewEventComponent } from './components/event/view-event/view-event.component';
import { ViewBloodComponent } from './components/blood/view-blood/view-blood.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { HomeComponent } from './components/home/home.component';
import {BloodRequestComponent} from './components/blood-request/blood-request.component';
import { ViewBloodCountComponent } from './components/view-blood-count/view-blood-count.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'addblood', component: AdminBloodAddComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'events', component: ViewEventComponent},
  {path: 'records', component: ViewBloodComponent},
  {path: 'users', component: ViewUserComponent},
  {path: 'addevent', component: AddEventComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bloodRequest', component: BloodRequestComponent},
  {path: 'bloodCount', component: ViewBloodCountComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
