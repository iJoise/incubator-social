import {AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState: AppInitStateType = {
   initialized: false
};

export const appReducer = (state: AppInitStateType = initialState, action: AppActionType): AppInitStateType => {
   switch (action.type) {
      case "INITIALIZED_SUCCESS":
         return {
            ...state,
            initialized: true
         }
      default:
         return state;
   }
}

/**
 * action creator
 */
const setInitializedSuccessAC = () => ({type: INITIALIZED_SUCCESS})

/**
 * thunk creator
 */
export const initializeApp = (): AppThunkType => async dispatch => {
   await dispatch(getAuthUserData());
   dispatch(setInitializedSuccessAC());
}

/**
 * Types
 */
type SetInitializedSuccessActionType = ReturnType<typeof setInitializedSuccessAC>
export type AppActionType = SetInitializedSuccessActionType
type AppInitStateType = {
   initialized: boolean
}






