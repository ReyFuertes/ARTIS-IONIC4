import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { FormsModule } from '@angular/forms';
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { PastAdviceComponent } from './components/past-advice/past-advice.component';
import { CollegeMapComponent } from './components/college-map/college-map.component';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  },
  {
    path: 'pastadvice',
    component: PastAdviceComponent
  },
  {
    path: 'collegemap',
    component: CollegeMapComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, PreferencesComponent, HeaderCardComponent, PastAdviceComponent, CollegeMapComponent],
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), SharedModule, RouterModule.forChild(routes)],
  exports: [DashboardComponent, PreferencesComponent, HeaderCardComponent, CollegeMapComponent],
  providers: [GoogleMaps],
})
export class MainModule { }
