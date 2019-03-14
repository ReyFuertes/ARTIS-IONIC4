import { AuthActions, AuthActionTypes } from "./auth.actions";
import { User } from "../../models/user.model";

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(authState = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };

  case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: null
      };

    default:
      return authState;
  }
}
