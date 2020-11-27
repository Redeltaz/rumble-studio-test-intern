import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DataComponent,
    SettingsComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DragDropModule
  ],
  providers: [SavedUrlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
