import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PictureListComponent } from './picture-list/picturelist.component';
import { PicturedetailsComponent } from './picturedetails/picturedetails.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {PictureService} from './shared/picture.service';
import { PictureuploadComponent } from './pictureupload/pictureupload.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {Route, RouterModule} from '@angular/router';
import {MainComponent} from './dashboard/main/main.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import { NewsComponent } from './news/news.component';
import { AlertsComponent } from './alerts/alerts.component';

const route: Route [] = [
    {path : '' , component:  MainComponent},
    {path : 'about-us', component: AboutusComponent },
    {path : 'pictures-list' , component : PictureListComponent},
    {path : 'profile' , component : ProfileComponent}
    ];



@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    PicturedetailsComponent,
    PictureuploadComponent,
    AboutusComponent,
    NewsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule.forRoot(route)
  ],
  providers: [{provide: PictureService , useClass: PictureService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
