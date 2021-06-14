import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type PhotosType = {
   small: string | null
   large: string | null
}

export type UsersType = {
   name: string
   id: number
   uniqueUrlName: string | null
   photos: PhotosType
   status: string | null
   followed: boolean
}
export type UsersPageType = {
   items: UsersType[]
   totalCount: number
   error: string | null
}

const initialState: UsersPageType = {
   items: [] as UsersType[],
   totalCount: 0,
   error: null,
};

export const usersReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
         }
      case UNFOLLOW:
         return {
            ...state,
            items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)
         }
      case SET_USERS:
         return {
            ...state,
            items: [...state.items, ...action.users]
         }
      default:
         return state;
   }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS, users} as const);

export type FollowActionType = ReturnType<typeof followAC>;
export type UnfollowActionType = ReturnType<typeof unFollowAC>;
export type SetUsersActionType = ReturnType<typeof setUsersAC>;