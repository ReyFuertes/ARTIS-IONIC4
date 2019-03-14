import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/modules/auth/auth.reducer';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  public title: string = 'Preferences';
  public person: string = 'Student';
  public studentName: string = 'Test Name';
  public language: string = 'English';
  public grade: string = '11th Grade';
  public sy: string = 'Early August';
  public hasAdvanceClasses: boolean = true;
  public foreignLang: string = 'Not Selected';
  public sport: string = 'Archery';
  public music: string = 'Pop';
  public art: string = 'Drawing';
  public interest: string = 'Engineering';
  public dreamCollege: string = 'Boston College';
  public parentSMSNumber: string = '';

  constructor(private route: Router, private store: Store<AuthState>) {
  }

  ngOnInit(): void {

  }

  public gotoDashboard(): void {
    this.route.navigateByUrl('/dashboard');
  }
}
