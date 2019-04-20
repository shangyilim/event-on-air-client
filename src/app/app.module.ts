import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgxMasonryModule } from "./ngx-masonry";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { environment } from "../environments/environment";
import { ModerateComponent } from "./moderate/moderate.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { FbLoginComponent } from './fb-login/fb-login.component';
import { HttpClientModule } from '@angular/common/http';
import { SpacewalkComponent } from './spacewalk/spacewalk.component';
import { StartShowComponent } from './start-show/start-show.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ModerateComponent, 
    FbLoginComponent, SpacewalkComponent, StartShowComponent],
  imports: [
    BrowserModule,
    NgxMasonryModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
