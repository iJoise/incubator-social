import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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
            ...action.data,
            isAuth: true
         }
      default:
         return state;
   }
}

export const setAuthUserDataAC = (id: number, email: string, login: string) => ({
   type: SET_USER_DATA,
   data: {
      id,
      email,
      login,
   }
} as const);

//thunk creator

export const getAuthUserData = () => (dispatch: Dispatch) => {
   authAPI.me()
      .then((data: AuthAPIType) => {
         if (data.resultCode === 0) {
            const {email, id, login} = data.data;
            dispatch(setAuthUserDataAC(id, email, login));
         }
      });
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;

