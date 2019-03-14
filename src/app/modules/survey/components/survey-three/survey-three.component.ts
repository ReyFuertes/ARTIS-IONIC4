import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyGenericPageComponent } from '../generic-page/generic-page.component';
import { Store, select } from '@ngrx/store';
import { SurveyState } from '../../survey.reducer';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { UserInfo } from 'src/app/models/survey.model';
import { SurveyService } from '../../survey.sevice';
import { FirebaseService } from 'src/app/services/firebase.service';
import { selectSurveyState } from '../../survey.selector';

@Component({
  selector: 'app-survey-three',
  templateUrl: './survey-three.component.html',
  styleUrls: ['./survey-three.component.scss']
})
export class SurveyThreeComponent extends SurveyGenericPageComponent implements OnInit {
  public value: number = 30;
  public course: string;
  public surveyInfo: UserInfo;

  constructor(
    store: Store<SurveyState>,
    localStorageService: LocalStorageService,
    surveyService: SurveyService,
    firebaseService: FirebaseService,
    private _store: Store<SurveyState>
  ) {
    super(store, localStorageService, surveyService, firebaseService);

    this._store.pipe(select(selectSurveyState)).subscribe(response =>  {
      if(response)
        this.surveyInfo = response.surveyInfo;
    });
  }

  ngOnInit(): void { }

  public updateSurveyInfo(): void {
    if (this.surveyInfo) {
      this.surveyInfo.course = this.course;
      this.updateSurvey(this.surveyInfo);
      this.next();
    }
  }
}
