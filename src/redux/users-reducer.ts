import {usersAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


const initialState: UsersPageType = {
   items: [],
   totalCount: 0,
   pageSize: 5,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
};

export const usersReducer = (state = initialState, action: UsersActionsType): UsersPageType => {
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
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.following
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
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
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingProgressAC = (following: boolean, userId: number) => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS,
   following,
   userId,
} as const);

/**
 * ThunkCreator
 */
export const getUsers = (currentPage: number, pageSize: number): AppThunkType => async dispatch => {
   try {
      dispatch(toggleIsFetchingAC(true));
      dispatch(setCurrentPageAC(currentPage));
      const data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
   } catch (err) {
      console.warn(err);
   } finally {
      dispatch(toggleIsFetchingAC(false));
   }
}
export const follow = (id: number): AppThunkType => async dispatch => {
   try {
      dispatch(toggleFollowingProgressAC(true, id));
      const data = await usersAPI.followUsers(id);
      if (data.resultCode === 0) {
         dispatch(followAC(id));
      }
   } catch (err) {
      console.warn(err);
   } finally {
      dispatch(toggleFollowingProgressAC(false, id));
   }
}
export const unfollow = (id: number): AppThunkType => async dispatch => {
   try {
      dispatch(toggleFollowingProgressAC(true, id));
      const data = await usersAPI.unfollowUsers(id);
      if (data.resultCode === 0) {
         dispatch(unFollowAC(id));
      }
   } catch (err) {
      console.warn(err);
   } finally {
      dispatch(toggleFollowingProgressAC(false, id));
   }
}

/**
 * type
 */
export type UsersActionsType = FollowActionType
   | UnfollowActionType
   | SetUsersActionType
   | SetCurrentPageActionTypeType
   | SetTotalUsersCountActionType
   | ToggleIsFetchingType
   | ToggleFollowingProgressType

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
   pageSize: number
   currentPage: number
   isFetching: boolean
   followingInProgress: number[]
}
export type FollowActionType = ReturnType<typeof followAC>;
export type UnfollowActionType = ReturnType<typeof unFollowAC>;
export type SetUsersActionType = ReturnType<typeof setUsersAC>;
export type SetCurrentPageActionTypeType = ReturnType<typeof setCurrentPageAC>;
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>;
export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgressAC>;

