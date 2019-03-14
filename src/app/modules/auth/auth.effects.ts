import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { defer, of } from "rxjs";
import { Login, AuthActionTypes, Logout } from "./auth.actions";
import { Store } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

@Injectable()
export class AuthEffects {
  constructor(private store: Store<AuthState>, private actions$: Actions, private router: Router) { }

  @Effect()
  init$ = defer(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData !== 'undefined') {
      this.store.dispatch(new Login({ user: userData }));
    } else {
      return of();
    }
  })

  @Effect({ dispatch: false })
  public Login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action =>
      {
        localStorage.setItem("user", JSON.stringify(action.payload.user))
      }
    )
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    })
  );


}
