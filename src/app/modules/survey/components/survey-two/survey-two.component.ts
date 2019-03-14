import { Component, OnInit } from "@angular/core";
import { SurveyGenericPageComponent } from "../generic-page/generic-page.component";
import { Router } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { SurveyState } from '../../survey.reducer';
import { LocalStorageService } from "src/app/services/localstorage.service";
import { UserInfo } from "src/app/models/survey.model";
import { SurveyService } from "../../survey.sevice";
import { Subscription } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { selectSurveyState } from "../../survey.selector";

@Component({
  selector: "app-survey-two",
  templateUrl: "./survey-two.component.html",
  styleUrls: ["./survey-two.component.scss"]
})
export class SurveyTwoComponent extends SurveyGenericPageComponent implements OnInit {
  public value: number = 20;
  public name: string;
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

  ngOnInit(): void {}

  public updateSurveyInfo(): void {
    if(this.surveyInfo ) {
      this.surveyInfo.name = this.name;
      this.updateSurvey(this.surveyInfo);
      this.next();
    }
  }
}
