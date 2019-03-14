import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { Next, Prev, SurveyActionTypes, InitSurvey, Update, List, Exit, ContentActivities, SchoolLoaded } from "./survey.actions";
import { defer, of } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { SurveyState } from "./survey.reducer";

@Injectable()
export class SurveyEffects {

  constructor(private actions$: Actions, private route: Router, private store: Store<SurveyState>) {}

  @Effect()
  init$ = defer(() => {
    const currentSurveyAttr = JSON.parse(localStorage.getItem('currentSurveyAttr'));
    const list = JSON.parse(localStorage.getItem('surveyData'));
    const contentActivities = JSON.parse(localStorage.getItem('contentActivities'));

    if(currentSurveyAttr && currentSurveyAttr !== 'undefined') {
      this.store.dispatch(new InitSurvey({ currentSurveyAttr }));
      this.store.dispatch(new List({ list }));
      this.store.dispatch( new ContentActivities({ contentActivities }))
    } else {
      return of();
    }
  })

  @Effect({ dispatch: false })
  public IsSchoolLoaded$ = this.actions$.pipe(
    ofType<SchoolLoaded>(SurveyActionTypes.SchoolLoaded),
    tap(action =>
      localStorage.setItem("isSchoolLoaded", JSON.stringify(action.payload.isSchoolLoaded))
    )
  );

  @Effect({ dispatch: false })
  public ContentActivities$ = this.actions$.pipe(
    ofType<ContentActivities>(SurveyActionTypes.ContentActivities),
    tap(action =>
      localStorage.setItem("contentActivities", JSON.stringify(action.payload.contentActivities))
    )
  );

  @Effect({ dispatch: false })
  public List$ = this.actions$.pipe(
    ofType<List>(SurveyActionTypes.List),
    tap(action =>
      localStorage.setItem("surveyData", JSON.stringify(action.payload.list))
    )
  );

  @Effect({ dispatch: false })
  public Update$ = this.actions$.pipe(
    ofType<Update>(SurveyActionTypes.Update),
    tap(action =>
      localStorage.setItem("surveyInfo", JSON.stringify(action.payload.surveyInfo))
    )
  );

  @Effect({ dispatch: false })
  public InitSurvey$ = this.actions$.pipe(
    ofType<InitSurvey>(SurveyActionTypes.InitSurvey),
    tap(action =>
      localStorage.setItem("currentSurveyAttr", JSON.stringify(action.payload.currentSurveyAttr))
    )
  );

  @Effect({ dispatch: false })
  public Next$ = this.actions$.pipe(
    ofType<Next>(SurveyActionTypes.Next),
    tap(action => {
      localStorage.setItem("currentSurveyAttr", JSON.stringify(action.payload.currentSurveyAttr));
      this.route.navigateByUrl(action.payload.currentSurveyAttr.route);
    }
    )
  );

  @Effect({ dispatch: false })
  public Prev$ = this.actions$.pipe(
    ofType<Prev>(SurveyActionTypes.Prev),
    tap(action => {
        localStorage.setItem("currentSurveyAttr", JSON.stringify(action.payload.currentSurveyAttr));
        this.route.navigateByUrl(action.payload.currentSurveyAttr.route);
      }
    )
  );

  @Effect({ dispatch: false })
  public Exit$ = this.actions$.pipe(
    ofType<Exit>(SurveyActionTypes.Exit),
    tap(() => {
        localStorage.removeItem('surveyData');
        localStorage.removeItem('currentSurveyAttr');
        localStorage.removeItem('surveyInfo');
        this.route.navigateByUrl('/login');
      }
    )
  );
}
