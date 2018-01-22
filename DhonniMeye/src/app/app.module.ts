import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import {UserComponent} from './users/user.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './others/pageNotFound.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, UserComponent, HomeComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
