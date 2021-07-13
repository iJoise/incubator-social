import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


type ActionType = SetUserDataActionType

type DataType = {
   id: number
   email: string
   login: string
}

export type AuthAPIType = {
   data: DataType
   resultCode: number
   messages: string[]
}

export type AuthType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}

const initialState: AuthType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
};

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
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

//thunk creator

export const getAuthUserData = () => (dispatch: Dispatch) => {
   authAPI.me()
      .then((data: AuthAPIType) => {
         if (data.resultCode === 0) {
            const {email, id, login} = data.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
         }
      });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
   authAPI.login(email, password, rememberMe)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
         } else {
            console.log(response.data.messages)
           const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
            dispatch( stopSubmit('login', {_error: message}))
         }
      })
}

export const logout = () => (dispatch: Dispatch) => {
   authAPI.logout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false));
         }
      })
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;

