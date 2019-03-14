import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SurveyGenericPageComponent } from "../generic-page/generic-page.component";
import { Store } from "@ngrx/store";
import { SurveyState } from "../../survey.reducer";
import { LocalStorageService } from "src/app/services/localstorage.service";
import { SurveyService } from "../../survey.sevice";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserInfo } from "src/app/models/survey.model";

@Component({
  selector: "app-create-personal-plan",
  templateUrl: "./create-personal-plan.component.html",
  styleUrls: ["./create-personal-plan.component.scss"]
})
export class CreatePersonalPlan extends SurveyGenericPageComponent implements OnInit {

  constructor(
    store: Store<SurveyState>,
    localStorageService: LocalStorageService,
    surveyService: SurveyService,
    firebaseService: FirebaseService,
    private _firebaseService: FirebaseService,
    private route: Router
  ) {
    super(store, localStorageService, surveyService, firebaseService);
  }

  ngOnInit(): void {
    this.onCreate();
  }

  public onCreate(): void {
    this.getSurveyData().subscribe((data) => {
      const surveyInfo: UserInfo = data.surveyInfo;
      this._firebaseService.signupUser(surveyInfo.email, surveyInfo.password).then(response => {
        surveyInfo.id = response.user.uid;
        this._firebaseService.addSurveyData(surveyInfo);
        setTimeout(() => {
          this.route.navigateByUrl('/login');
        }, 500);
      })
    });
  }
}
