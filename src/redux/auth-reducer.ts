import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';


const initialState: AuthType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
};

export const authReducer = (state: AuthType = initialState, action: AuthActionsType): AuthType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   }
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
   type: SET_USER_DATA,
   payload: {
      id,
      email,
      login,
      isAuth,
   }
} as const);

/**
 * thunk creator
 */
export const getAuthUserData = (): AppThunkType => async dispatch => {
   try {
      const data = await authAPI.me();
      if (data.resultCode === 0) {
         const {email, id, login} = data.data;
         dispatch(setAuthUserDataAC(id, email, login, true));
      }
   } catch(err) {
      console.warn(err);
   }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
   try {
      const data = await authAPI.login(email, password, rememberMe);
      if (data.resultCode === 0) {
         dispatch(getAuthUserData());
      } else {
         const message = data.messages.length > 0 ? data.messages[0] : 'some error';
         dispatch(stopSubmit('login', {_error: message}));
      }
   } catch(err) {
      console.warn(err);
   }
}

export const logout = (): AppThunkType => async dispatch => {
   try {
      const data = await authAPI.logout();
      if (data.resultCode === 0) {
         dispatch(setAuthUserDataAC(null, null, null, false));
      }
   } catch(err) {
      console.warn(err);
   }
}

/**
 * Types
 */
export type AuthActionsType = SetUserDataActionType

export type AuthDataType = {
   id: number
   email: string
   login: string
}


export type AuthType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;

