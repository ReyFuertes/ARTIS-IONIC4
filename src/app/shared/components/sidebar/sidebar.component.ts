import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/modules/auth/auth.reducer';
import { Logout } from 'src/app/modules/auth/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menus: any[] = [
    {
      text: "This Weeks Advice",
      icon: "fas fa-tachometer-alt",
      route: "/dashboard"
    },
    {
      text: "Receive Copies",
      icon: "far fa-bell",
      route: "/notifications"
    },
    {
      text: "Past Advice",
      icon: "far fa-comment-dots",
      route: "/pastadvice"
    },
    {
      text: "College Map",
      icon: "fas fa-chart-line",
      route: "/collegemap"
    },
    {
      text: "Request Sessions",
      icon: "far fa-calendar-alt",
      route: "/calendar"
    },
    {
      text: "Preferences",
      icon: "far fa-calendar-alt",
      route: "/preferences"
    },
    {
      text: "Change Password",
      icon: "far fa-calendar-alt",
      route: "/calendar"
    },
    {
      text: "Upgrade to Premium",
      icon: "far fa-calendar-alt",
      route: "/calendar"
    }
  ];

  constructor(private router: Router, private store: Store<AuthState>) { }

  ngOnInit(): void { }

  public navigate(route: string): void {
    this.router.navigateByUrl(route);
  }

  public onLogout(): void {
    this.store.dispatch(new Logout());
  }

}
