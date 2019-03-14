import { Injectable } from '@angular/core';
import { SurveyAttribute, UserInfo } from '../models/survey.model';
import { ContentActivity } from '../models/content-activity.model';

@Injectable()
export class LocalStorageService {

  public isSchoolLoaded(): SurveyAttribute {
    return JSON.parse(localStorage.getItem('isSchoolLoaded'));
  }

  public getActiveSurvey(): SurveyAttribute {
    return JSON.parse(localStorage.getItem('currentSurveyAttr'));
  }

  public getSurvey(): UserInfo {
    return JSON.parse(localStorage.getItem('surveyCollection'));
  }

  public getContentActivities(): ContentActivity[] {
    return JSON.parse(localStorage.getItem('contentActivities'));
  }

}