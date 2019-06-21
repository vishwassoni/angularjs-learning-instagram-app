import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {NewsComponent} from '../news/news.component';
import {AlertsComponent} from '../alerts/alerts.component';

const routes: Routes = [
  {path : 'news' , component : NewsComponent},
  {path : 'alerts' , component : AlertsComponent}
] ;

@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MainComponent
  ]
})
export class DashboardModule { }
