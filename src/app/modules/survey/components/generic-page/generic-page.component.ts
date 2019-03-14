import { SurveyAttribute, UserInfo } from "src/app/models/survey.model";
import { LocalStorageService } from "src/app/services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { SurveyState } from "../../survey.reducer";
import { InitSurvey, Next, Prev, Update, List, SchoolLoaded } from "../../survey.actions";
import { SurveyService } from "../../survey.sevice";
import { activeSurveySelector } from "../../survey.selector";
import { Observable } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";

export abstract class SurveyGenericPageComponent {
  public currentSurveyAttr: SurveyAttribute;
  public nextSurvey: SurveyAttribute;
  public prevSurvey: SurveyAttribute;
  public schools: any[];

  constructor(
    private store: Store<SurveyState>,
    private localStorageService: LocalStorageService,
    private surveyService: SurveyService,
    private firebaseService: FirebaseService
  ) {
    this.store.pipe(select(activeSurveySelector)).subscribe((survey: any) => {
      if (survey) {
        if (!this.currentSurveyAttr)
          this.currentSurveyAttr = survey.list[survey.currentSurveyAttr.index];

        if (this.currentSurveyAttr) {
          if (this.currentSurveyAttr.nextIndex)
            this.nextSurvey = survey.list[this.currentSurveyAttr.nextIndex];

          this.prevSurvey = survey.list[this.currentSurveyAttr.prevIndex];
        }

        if (!survey.isSchoolLoaded) {
          this.getSchools().subscribe(schools => {
            this.store.dispatch(new SchoolLoaded({ isSchoolLoaded: true, schools }))
          });
        }
      }
    })
  }

  protected getSchools(): any {
    return this.firebaseService.getSchools();
  }

  protected getContentActivities(subCollection: string): any {
    return this.firebaseService.getContentActivities(subCollection);
  }

  protected updateSurvey(surveyInfo?: UserInfo): void {
    this.store.dispatch(new Update({ surveyInfo }));
  }

  protected setSurveyList(): void {
    this.surveyService.getSurveyData().subscribe(response => {
      if (response) {
        this.store.dispatch(new List({ list: response }));
        this.store.dispatch(new InitSurvey({ currentSurveyAttr: response[1] }));
      }
    });
  }

  protected initSurvey(currentSurveyAttr: SurveyAttribute): void {
    this.store.dispatch(new InitSurvey({ currentSurveyAttr }));
  }

  protected getSurveyData(): Observable<any> {
    return this.store.pipe(select(activeSurveySelector))
  }

  get getSurvey(): UserInfo {
    if (this.localStorageService.getSurvey()) {
      return this.localStorageService.getSurvey();
    }
    return null;
  }

  public next() {
    const currentSurveyAttr = this.nextSurvey;
    this.store.dispatch(new Next({ currentSurveyAttr }));
  }

  public prev(): void {
    const currentSurveyAttr = this.prevSurvey;
    this.store.dispatch(new Prev({ currentSurveyAttr }));
  }

}
