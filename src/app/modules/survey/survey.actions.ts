import { Action } from "@ngrx/store";
import { SurveyAttribute, UserInfo } from "src/app/models/survey.model";
import { ContentActivity } from "src/app/models/content-activity.model";
import { School } from "src/app/models/schools.model";

export enum SurveyActionTypes {
  SchoolLoaded = "[Survey] SchoolLoaded",
  InitSurvey = "[Survey] Active Survey",
  Next = "[Survey] Next Survey",
  Prev = "[Survey] Prev Survey",
  Update = "[Survey] Surveydata",
  ContentActivities = "[Survey] ContentActivities",
  List = "[Survey] List",
  Exit = "[Survey] Exit",
}

export class SchoolLoaded implements Action {
  readonly type = SurveyActionTypes.SchoolLoaded;
  constructor(public payload: { isSchoolLoaded: boolean, schools: School[] }) { }
}

export class ContentActivities implements Action {
  readonly type = SurveyActionTypes.ContentActivities;
  constructor(public payload: { contentActivities: ContentActivity[] }) { }
}

export class List implements Action {
  readonly type = SurveyActionTypes.List;
  constructor(public payload: { list: SurveyAttribute[] }) { }
}

export class Update implements Action {
  readonly type = SurveyActionTypes.Update;
  constructor(public payload: { surveyInfo: UserInfo }) { }
}

export class InitSurvey implements Action {
  readonly type = SurveyActionTypes.InitSurvey;
  constructor(public payload: { currentSurveyAttr: SurveyAttribute }) { }
}

export class Next implements Action {
  readonly type = SurveyActionTypes.Next;
  constructor(public payload: { currentSurveyAttr: SurveyAttribute }) { }
}

export class Prev implements Action {
  readonly type = SurveyActionTypes.Prev;
  constructor(public payload: { currentSurveyAttr: SurveyAttribute }) { }
}

export class Exit implements Action {
  readonly type = SurveyActionTypes.Exit;
}

export type SurveyActions = InitSurvey | Next | Prev | Update | List | ContentActivities | Exit | SchoolLoaded;
