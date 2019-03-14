import { Component, OnInit } from '@angular/core';
import { SurveyGenericPageComponent } from '../generic-page/generic-page.component';
import { Store, select } from '@ngrx/store';
import { SurveyState } from '../../survey.reducer';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { UserInfo, Option } from 'src/app/models/survey.model';
import { SurveyService } from '../../survey.sevice';
import { FirebaseService } from 'src/app/services/firebase.service';
import { selectSurveyState, contentActivitySelector } from '../../survey.selector';
import { ModalController } from '@ionic/angular';
import { ModalOptionComponent } from 'src/app/shared/components/modal-option/modal-option.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-survey-six',
  templateUrl: './survey-six.component.html',
  styleUrls: ['./survey-six.component.scss']
})
export class SurveySixComponent extends SurveyGenericPageComponent implements OnInit {
  public value: number = 60;
  public option = Option;
  public surveyInfo: UserInfo;
  public options: any[];
  public selectedOption: string;
  public headerText: string = 'Select a Foreign Language';
  public foreignLangColText: string = 'foreign_language';

  constructor(
    store: Store<SurveyState>,
    localStorageService: LocalStorageService,
    surveyService: SurveyService,
    firebaseService: FirebaseService,
    private _store: Store<SurveyState>,
    public modalCtrl: ModalController,
    public modalService: ModalService
  ) {
    super(store, localStorageService, surveyService, firebaseService);

    this._store.pipe(select(selectSurveyState)).subscribe(response => {
      if (response)
        this.surveyInfo = response.surveyInfo;
    });

    this.getContentActivities(this.foreignLangColText).subscribe(collections => this.options = collections);
  }

  ngOnInit(): void { }

  public updateSurveyInfo(): void {
    if (this.surveyInfo) {
      this.surveyInfo.fluentInForeignLang = this.selectedOption ? this.selectedOption : '';
      this.updateSurvey(this.surveyInfo);
      this.next();
    }
  }

  public presentOptions() {
    this.modalService.change.subscribe(option => {
      this.selectedOption = option.name;
    });

    if (!this.selectedOption) {
      this.showModal();
    }
  }

  public onCancel(): void {
    this.selectedOption = undefined;
    this.showModal();
  }

  private showModal(): void {
    this.modalService.show(ModalOptionComponent, { options: this.options, headerText: this.headerText });
  }
}
