import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule,FormsModule}from '@angular/forms';

import {UserService} from './users/user.service';
import { AppComponent }  from './app.component';
import {UserComponent} from './users/user.component';
import {HomeComponent} from './home/home.component';

import {PageNotFoundComponent} from './others/pageNotFound.component';
import {UserLoginComponent}from './users/userLogin.component';





const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes),
    FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, UserComponent, HomeComponent,PageNotFoundComponent,
    UserLoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
