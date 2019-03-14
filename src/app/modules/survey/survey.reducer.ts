import { SurveyAttribute, UserInfo } from 'src/app/models/survey.model';
import { SurveyActionTypes, SurveyActions, SchoolLoaded } from './survey.actions';
import { ContentActivity } from 'src/app/models/content-activity.model';

export interface SurveyState {
  currentSurveyAttr?: SurveyAttribute;
  surveyInfo?: UserInfo,
  list?: SurveyAttribute[],
  contentActivities: ContentActivity[],
  isSchoolLoaded?: boolean,
  schools: any[]
}

export const initialSurveyState: SurveyState = {
  currentSurveyAttr: undefined,
  surveyInfo: undefined,
  list: [],
  contentActivities: [],
  isSchoolLoaded: undefined,
  schools: []
};

export function surveyReducer(Surveystate = initialSurveyState, action: SurveyActions): SurveyState {
  switch (action.type) {
    case SurveyActionTypes.SchoolLoaded:
      return Object.assign({}, Surveystate, {
        isSchoolLoaded: action.payload.isSchoolLoaded,
        schools: action.payload.schools
      });

    case SurveyActionTypes.ContentActivities:
      return Object.assign({}, Surveystate, {
        contentActivities: action.payload.contentActivities
      });

    case SurveyActionTypes.Next || SurveyActionTypes.Prev:
      return Object.assign({}, Surveystate, {
        currentSurveyAttr: action.payload.currentSurveyAttr
      });

    case SurveyActionTypes.InitSurvey:
      return Object.assign({}, Surveystate, {
        currentSurveyAttr: action.payload.currentSurveyAttr
      });

    case SurveyActionTypes.List:
      return Object.assign({}, Surveystate, {
        list: action.payload.list
      });

    case SurveyActionTypes.Update:
      return Object.assign({}, Surveystate, {
        surveyInfo: action.payload.surveyInfo
      });

    case SurveyActionTypes.Update:
      return Object.assign({}, Surveystate, {
        surveyInfo: action.payload.surveyInfo
      });

    case SurveyActionTypes.Exit:
      Surveystate = undefined


    default:
      return Surveystate;
  }
}
