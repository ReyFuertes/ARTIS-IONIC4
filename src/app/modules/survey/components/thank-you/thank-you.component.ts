import { Component, OnInit } from "@angular/core";
import { SurveyGenericPageComponent } from "../generic-page/generic-page.component";
import { Store } from "@ngrx/store";
import { SurveyState } from "../../survey.reducer";
import { LocalStorageService } from "src/app/services/localstorage.service";
import { SurveyService } from "../../survey.sevice";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-thank-you",
  templateUrl: "./thank-you.component.html",
  styleUrls: ["./thank-you.component.scss"]
})
export class ThankYouComponent extends SurveyGenericPageComponent implements OnInit {
  constructor(
    store: Store<SurveyState>,
    localStorageService: LocalStorageService,
    surveyService: SurveyService,
    firebaseService: FirebaseService
  ) {
    super(store, localStorageService, surveyService, firebaseService);
  }

  ngOnInit(): void {}

  public getStarted(): void {
    this.next();
  }
}
