import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './services/localstorage.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { SharedModule } from './shared/shared.module';
import { ModalService } from './services/modal.service';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';

@NgModule({
  declarations: [AppComponent, DashboardLayoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    FirebaseService,
    AngularFireAuth,
    ModalService,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
