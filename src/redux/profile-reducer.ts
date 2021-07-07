import {v1} from 'uuid';
import {PhotosType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

export type PostType = {
   id?: string
   message: string
   countLike: number
}

type ContactsType = {
   facebook: string | null
   website: string | null
   vk: string | null
   twitter: string | null
   instagram: string | null
   youtube: string | null
   github: string | null
   mainLink: string | null
}

export type UserProfileType = {
   aboutMe: string | null
   contacts: ContactsType
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string
   userId: number
   photos: PhotosType
}

export type ProfilePageType = {
   posts: Array<PostType>
   newPostsText: string
   profile: UserProfileType | null
   status: string | null
   photos: PhotosType
}

type ActionType = AddNewPostActionType
   | ChangeNewPostActionType
   | SetUserProfileType
   | SetStatusType
   | SetMyPhotoType


const initialState: ProfilePageType = {
   posts: [
      {
         id: v1(),
         message: 'Lorem ipsum dolor, sit amet consecrated animistic elicit. Possimus ipsum sit voluptate sapiente ratione vero magnidoloremque modi quit.',
         countLike: 10
      },
      {
         id: v1(),
         message: 'Lorem ipsum dolor, sit amet consecrated animistic elicit. Possimus ipsum sit voluptate sapiente ratione vero magnidoloremque modi qui.',
         countLike: 32
      }
   ],
   newPostsText: '',
   profile: null,
   status: null,
   photos: {
      small: null,
      large: null
   }
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
   switch (action.type) {
      case ADD_NEW_POST:
         const post: PostType = {
            id: v1(),
            message: state.newPostsText,
            countLike: 3
         };
         return {
            ...state,
            newPostsText: '',
            posts: [...state.posts, post]
         }
      case CHANGE_NEW_POST:
         return {
            ...state,
            newPostsText: action.newText
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      case SET_PHOTO:
         return {
            ...state,
            photos: action.photo
         }
      default:
         return state;
   }
}

export const addPostAC = () => ({type: ADD_NEW_POST} as const);
export const changeNewPostAC = (newText: string) => ({type: CHANGE_NEW_POST, newText: newText} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const setMyPhotoAC = (photo: PhotosType) => ({type: SET_PHOTO, photo} as const)

//thunk creator
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
   profileAPI.getProfile(userId)
      .then((data: UserProfileType) => {
         dispatch(setUserProfileAC(data));
      });
}

export const getMyPhoto = (userId: number) => (dispatch: Dispatch) => {
   profileAPI.getProfile(userId)
      .then((response) => {
         dispatch(setMyPhotoAC(response.photos));
      });
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setStatusAC(response.data));
      })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
   profileAPI.updateStatus(status)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status));
         }
      })
}

export type AddNewPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewPostActionType = ReturnType<typeof changeNewPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>
export type SetStatusType = ReturnType<typeof setStatusAC>
export type SetMyPhotoType = ReturnType<typeof setMyPhotoAC>
