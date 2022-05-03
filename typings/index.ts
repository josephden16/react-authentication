export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface IAuthContext {
  state: IAuthState;
  actions: IAuthAction;
}

export interface IAuthState {
  user: User | null | undefined;
  initialLoading: boolean;
  isLoggingIn: boolean;
  loginError: string;
}

export interface IAuthAction {
  login: (email: string, password: string) => void;
  logout: () => void;
}

export enum AuthActionType {
  INIT_LOGIN = "INIT_LOGIN",
  LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL",
  LOGIN_FAILED = "LOGIN_FAILED",
  INIT_FETCH_USER_DATA = "INIT_FETCH_USER_DATA",
  FETCH_USER_DATA_SUCCESSFUL = "FETCH_USER_DATA_SUCCESSFUL",
  FETCH_USER_DATA_FAILED = "FETCH_USER_DATA_FAILED",
  LOGOUT = "LOGOUT",
}

export interface AuthAction {
  type: AuthActionType;
  payload?: {
    user?: User;
    error?: string;
  };
}
