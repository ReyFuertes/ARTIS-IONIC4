import { Component, OnInit } from '@angular/core';
import { SurveyGenericPageComponent } from '../generic-page/generic-page.component';
import { Store, select } from '@ngrx/store';
import { SurveyState } from '../../survey.reducer';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { UserInfo, Option } from 'src/app/models/survey.model';
import { SurveyService } from '../../survey.sevice';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalService } from 'src/app/services/modal.service';
import { ModalOptionComponent } from 'src/app/shared/components/modal-option/modal-option.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { schoolSelector } from '../../survey.selector';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-survey-nine',
  templateUrl: './survey-nine.component.html',
  styleUrls: ['./survey-nine.component.scss']
})
export class SurveyNineComponent extends SurveyGenericPageComponent implements OnInit {
  public value: number = 90;
  public surveyInfo: UserInfo;
  public selectedOption: string;
  public options: any[] = [];
  public headerText: string = 'Select College';

  constructor(
    route: Router,
    store: Store<SurveyState>,
    localStorageService: LocalStorageService,
    surveyService: SurveyService,
    firebaseService: FirebaseService,
    navCtrl: NavController,
    private modalService: ModalService,
  ) {
    // super(store, localStorageService, surveyService, firebaseService, route, navCtrl);
    super(store, localStorageService, surveyService, firebaseService);
    
    this.modalService.change.subscribe(option => {
      this.selectedOption = option.name;
    });
  }

  ngOnInit(): void { }

  public updateSurveyInfo(): void {
    if (this.surveyInfo) {
      this.surveyInfo.college = this.selectedOption;
      this.updateSurvey(this.surveyInfo);
      this.next();
    }
  }

  public presentOptions() {
    this.showModal();
  }

  public onCancel(): void {
    this.selectedOption = undefined;
    this.showModal();
  }

  private showModal(): void {
    this.modalService.show(ModalOptionComponent);
  }
}
