import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { SurveyGenericPageComponent } from "../generic-page/generic-page.component";
import { Store, select } from "@ngrx/store";
import { SurveyState } from "../../survey.reducer";
import { LocalStorageService } from "src/app/services/localstorage.service";
import { Person, UserInfo } from "src/app/models/survey.model";
import { SurveyService } from "../../survey.sevice";
import { Exit, ContentActivities } from '../../survey.actions';
import { FirebaseService } from 'src/app/services/firebase.service';
import { activeSurveySelector, selectSurveyState } from '../../survey.selector';

@Component({
  selector: 'app-email-password',
  templateUrl: './email-password.component.html',
  styleUrls: ['./email-password.component.scss']
})
export class EmailPasswordComponent extends SurveyGenericPageComponent implements OnInit {
  public signupForm: FormGroup;
  public surveyInfo: UserInfo;
  private artCollection: string = 'art';

  constructor(route: Router,
    store: Store<SurveyState>,
    localStorageService: LocalStorageService,
    surveyService: SurveyService,
    firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private _route: Router,
    private _store: Store<SurveyState>,
    private _localStorageService: LocalStorageService) {
    super(store, localStorageService, surveyService, firebaseService);

    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.signupForm = this.formBuilder.group({
      email: ["12345@gmail.com", Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ["p@55w0rd", Validators.compose([Validators.required])]
    });

    this.updateSurvey({
      email: null,
      password: null,
      person: null,
      name: null,
      course: null,
      sy: null,
      takeAdvanceClasses: null,
      fluentInForeignLang: null,
      participateMusic: null,
      participateArts: null,
      college: null
    });
    this.setSurveyList();

    this._store.pipe(select(selectSurveyState)).subscribe(response => {
      if (response)
        this.surveyInfo = response.surveyInfo;
    });
  }

  ngOnInit(): void { }

  public gotoLogin(): void {
    this._store.dispatch(new Exit());
  }

  public updateSurveyInfo(): void {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    if (this.surveyInfo && email && password) {
      this.surveyInfo.email = email;
      this.surveyInfo.password = password;
      this.updateSurvey(this.surveyInfo);
      this._route.navigateByUrl('/survey-one');
    }
  }
}
