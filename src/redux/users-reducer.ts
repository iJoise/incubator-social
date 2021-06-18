import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
   error: string | null
   totalCount: number
   pageSize: number
   currentPage: number
}

const initialState: UsersPageType = {
   items: [] as UsersType[],
   error: null,
   totalCount: 0,
   pageSize: 5,
   currentPage: 1
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
            items: [...action.users]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            totalCount: action.totalCount
         }
      default:
         return state;
   }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS, users} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const);



export type FollowActionType = ReturnType<typeof followAC>;
export type UnfollowActionType = ReturnType<typeof unFollowAC>;
export type SetUsersActionType = ReturnType<typeof setUsersAC>;
export type SetCurrentPageActionTypeType = ReturnType<typeof setCurrentPageAC>;
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;

