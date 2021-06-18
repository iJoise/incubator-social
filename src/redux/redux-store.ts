import {combineReducers, createStore} from "redux";
import {AddMessageActionType, ChangeMessageActionType, dialogReducer} from "./dialog-reducer";
import {AddNewPostActionType, ChangeNewPostActionType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
   FollowActionType,
   SetCurrentPageActionTypeType, SetTotalUsersCountActionType,
   SetUsersActionType,
   UnfollowActionType,
   usersReducer
} from "./users-reducer";

const rootReducer = combineReducers({
   dialogPage: dialogReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);


export type ActionType = AddNewPostActionType
   | ChangeNewPostActionType
   | AddMessageActionType
   | ChangeMessageActionType
   | FollowActionType
   | UnfollowActionType
   | SetUsersActionType
   | SetCurrentPageActionTypeType
   | SetTotalUsersCountActionType