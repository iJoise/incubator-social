import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {DialogActionsType, dialogReducer} from "./dialog-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'
import {AppActionType, appReducer} from "./app-reducer";
import {ChatActionType, chatReducer} from "./chat-reducer";

const rootReducer = combineReducers({
   dialogPage: dialogReducer,
   profilePage: profileReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer,
   chat: chatReducer,
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
   | ChatActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
// @ts-ignore
window.store = store;
