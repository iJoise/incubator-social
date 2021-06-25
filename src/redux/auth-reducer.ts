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


export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;

