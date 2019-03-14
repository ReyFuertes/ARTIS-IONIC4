import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class SurveyService extends BaseService {
  constructor(http: HttpClient ){
    super(http);
  }

  public getSurveyData(): Observable<any[]> {
    return this.get('assets/json/surveyData.json');
  }


}