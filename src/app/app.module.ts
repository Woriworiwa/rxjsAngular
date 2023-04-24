import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {NavComponent} from "./nav/nav.component";
import { MainComponent } from './main/main.component';
import { EditorComponent } from './editor/editor.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    EditorComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAwqEdqDgsdC0MdHzDCsWVa2IclxjB-CCg",
      authDomain: "rxjsangular.firebaseapp.com",
      projectId: "rxjsangular",
      storageBucket: "rxjsangular.appspot.com",
      messagingSenderId: "466658964491",
      appId: "1:466658964491:web:f95b4bd16b5ef9d12b830e",
      measurementId: "G-L0PVJB6F05"
    }),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
