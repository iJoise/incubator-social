import {applyMiddleware, combineReducers, createStore} from "redux";
import {DialogActionsType, dialogReducer} from "./dialog-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
   dialogPage: dialogReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


type AppActionsType = AuthActionsType | DialogActionsType | ProfileActionsType | UsersActionsType | FormAction

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
// @ts-ignore
window.store = store;
