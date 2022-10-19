import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { StopComponent } from './components/training/current-training/stop-training.component';
import { AuthService } from './components/auth/auth.service';
import { TrainingService } from './components/training/training.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UIService } from './components/shared/ui.service';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    AuthService,
    TrainingService,
    UIService
  ],
  bootstrap: [AppComponent],
  entryComponents: [StopComponent]
})
export class AppModule { }
