import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/modules/auth/auth.reducer';
import { selectAuthState } from 'src/app/modules/auth/auth.selector';
import * as moment from 'moment';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {
  public displayName: string;
  public caption: string = 'Lay the foundation of success with your custom plan for this week.';

  constructor(private store: Store<AuthState>) {
    this.getLoginName();
  }

  ngOnInit(): void { }

  get getCurrentDate(): string {
    return moment().format('LL');
  }

  public getLoginName(): void {
    this.store.pipe(select(selectAuthState)).subscribe((response: any) => {
      const user: User = response.user;
      if(user && user.userInfo) {
        this.displayName = user.userInfo.name;
      }
    })
  }
}
