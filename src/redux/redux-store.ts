import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

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

// @ts-ignore
window.store = store;
