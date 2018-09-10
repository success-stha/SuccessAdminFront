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

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:'full'},
  {path: 'addblood', component: AdminBloodAddComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'events', component: ViewEventComponent},
  {path: 'records', component: ViewBloodComponent},
  {path: 'users', component: ViewUserComponent},
  {path: 'addevent', component: AddEventComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
