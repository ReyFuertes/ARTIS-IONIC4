import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SurveyService } from './survey.sevice';
import { IonicModule } from '@ionic/angular';
import { SurveyOneComponent } from './components/survey-one/survey-one.component';
import { SurveyTwoComponent } from './components/survey-two/survey-two.component';
import { SurveyThreeComponent } from './components/survey-three/survey-three.component';
import { SurveyFourComponent } from './components/survey-four/survey-four.component';
import { StoreModule } from '@ngrx/store';
import * as fromSurvey from './survey.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SurveyEffects } from './survey.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyFiveComponent } from './components/survey-five/survey-five.component';
import { SurveySixComponent } from './components/survey-six/survey-six.component';
import { SurveySevenComponent } from './components/survey-seven/survey-seven.component';
import { SurveyEightComponent } from './components/survey-eight/survey-eight.component';
import { SurveyNineComponent } from './components/survey-nine/survey-nine.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { CreatePersonalPlan } from './components/create-personal-plan/create-personal-plan.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmailPasswordComponent } from './components/email-password/email-password.component';
import { ModalService } from 'src/app/services/modal.service';

export const routes: Routes = [
  { path: 'sign-up', component: EmailPasswordComponent },
  { path: 'survey-one', component: SurveyOneComponent },
  { path: 'survey-two', component: SurveyTwoComponent },
  { path: 'survey-three', component: SurveyThreeComponent },
  { path: 'survey-four', component: SurveyFourComponent },
  { path: 'survey-five', component: SurveyFiveComponent },
  { path: 'survey-six', component: SurveySixComponent },
  { path: 'survey-seven', component: SurveySevenComponent },
  { path: 'survey-eight', component: SurveyEightComponent },
  { path: 'survey-nine', component: SurveyNineComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'create-personal-plan', component: CreatePersonalPlan },
];

@NgModule({
  declarations: [
    SurveyOneComponent,
    SurveyTwoComponent,
    SurveyThreeComponent,
    SurveyFourComponent,
    SurveyFiveComponent,
    SurveySixComponent,
    SurveySevenComponent,
    SurveyEightComponent,
    SurveyNineComponent,
    ThankYouComponent,
    EmailPasswordComponent,
    CreatePersonalPlan
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SharedModule,
    
    RouterModule.forChild(routes),
    StoreModule.forFeature('survey', fromSurvey.surveyReducer),
    EffectsModule.forFeature([SurveyEffects])
  ],
  exports: [
    SurveyOneComponent,
    SurveyTwoComponent,
    SurveyThreeComponent,
    SurveyFourComponent,
    SurveyFiveComponent,
    SurveySixComponent,
    SurveySevenComponent,
    SurveyEightComponent,
    SurveyNineComponent,
    ThankYouComponent,
    CreatePersonalPlan,
    EmailPasswordComponent
  ],
  providers: [SurveyService, ModalService]
})
export class SurveyModule {}
