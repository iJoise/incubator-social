import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const rootReducer = combineReducers({
   dialogPage: dialogReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);