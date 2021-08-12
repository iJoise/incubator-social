import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {DialogActionsType, dialogReducer} from "./dialog-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'
import {AppActionType, appReducer} from "./app-reducer";

const rootReducer = combineReducers({
   dialogPage: dialogReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


type AppActionsType = AuthActionsType
   | DialogActionsType
   | ProfileActionsType
   | UsersActionsType
   | FormAction
   | AppActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
// @ts-ignore
window.store = store;
