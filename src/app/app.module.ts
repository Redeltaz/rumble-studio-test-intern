import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DataComponent } from './data/data.component';
import { SettingsComponent } from './settings/settings.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from './app-routing.module';

import { SavedUrlsService } from './services/saved-urls.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DataComponent,
    SettingsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [SavedUrlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
