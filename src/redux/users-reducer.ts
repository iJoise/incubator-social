import {v1} from "uuid";
import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

type LocationType = {
   city: string
   country: string
}
export type UsersType = {
   id: string
   followed: boolean
   avatarURL: string
   fullName: string
   status: string
   location: LocationType
}
export type UsersPageType = {
   users: UsersType[]
}

const initialState: UsersPageType = {
   users: [] as UsersType[]
};

export const usersReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state;
   }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const);
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS, users} as const);

export type FollowActionType = ReturnType<typeof followAC>;
export type UnfollowActionType = ReturnType<typeof unFollowAC>;
export type SetUsersActionType = ReturnType<typeof setUsersAC>;