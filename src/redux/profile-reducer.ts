import {v1} from 'uuid';
import {PhotosType} from "./users-reducer";
import {profileAPI, ProfileUpdateType} from "../api/api";
import {AppThunkType} from "./redux-store";

const ADD_NEW_POST = 'social/profile/ADD-NEW-POST';
const SET_USER_PROFILE = 'social/profile/SET_USER_PROFILE';
const SET_STATUS = 'social/profile/SET_STATUS';
const SET_PHOTO = 'social/profile/SET_PHOTO';
const SAVE_PHOTOS_SUCCESS = 'social/profile/SAVE_PHOTOS_SUCCESS';
const SAVE_PROFILE = 'social/profile/SAVE_PROFILE';

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
   profile: null,
   status: null,
   photos: {
      small: null,
      large: null
   }
}

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfilePageType => {
   switch (action.type) {
      case ADD_NEW_POST:
         const post: PostType = {
            id: v1(),
            message: action.newPost,
            countLike: 3
         };
         return {
            ...state,
            posts: [post, ...state.posts]
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
      case SAVE_PHOTOS_SUCCESS:
         return {
            ...state,
            profile: state.profile && {...state.profile, photos: action.photos}
         }
      default:
         return state;
   }
}

export const addPostAC = (newPost: string) => ({type: ADD_NEW_POST, newPost} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const setMyPhotoAC = (photo: PhotosType) => ({type: SET_PHOTO, photo} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTOS_SUCCESS, photos} as const)
export const saveProfileAC = (profile: UserProfileType) => ({type: SAVE_PROFILE, profile})


/**
 * thunk creator
 */
export const getUserProfile = (userId: number): AppThunkType => async dispatch => {
   try {
      const data = await profileAPI.getProfile(userId);
      dispatch(setUserProfileAC(data));
   } catch (err) {
      console.warn(err);
   }
}

export const getMyPhoto = (userId: number): AppThunkType => async dispatch => {
   try {
      const data = await profileAPI.getProfile(userId);
      dispatch(setMyPhotoAC(data.photos));
   } catch (err) {
      console.warn(err);
   }
}

export const getStatus = (userId: number): AppThunkType => async dispatch => {
   try {
      const data = await profileAPI.getStatus(userId);
      dispatch(setStatusAC(data));
   } catch (err) {
      console.warn(err);
   }
}

export const updateStatus = (status: string): AppThunkType => async dispatch => {
   try {
      const data = await profileAPI.updateStatus(status);
      if (data.resultCode === 0) {
         dispatch(setStatusAC(status));
      }
   } catch (err) {
      console.warn(err);
   }
}

export const savePhoto = (photo: File): AppThunkType => async dispatch => {
   try {
      const data = await profileAPI.savePhoto(photo)
      if (data.resultCode === 0) {
         dispatch(savePhotoSuccess(data.data.photos))
      }
   } catch (err) {
      console.warn(err);
   }
}

export const saveProfile = (formData: ProfileUpdateType): AppThunkType => async dispatch => {
   try {
      await profileAPI.saveProfile(formData);
      const dataUser = await profileAPI.getProfile(formData.userId);
      dispatch(setUserProfileAC(dataUser));
   } catch(err) {
      console.warn(err);
   }
}

/**
 * type
 */
export type ProfileActionsType = AddNewPostActionType
   | SetUserProfileType
   | SetStatusType
   | SetMyPhotoType
   | SavePhotosType

export type AddNewPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>
export type SetStatusType = ReturnType<typeof setStatusAC>
export type SetMyPhotoType = ReturnType<typeof setMyPhotoAC>
export type SavePhotosType = ReturnType<typeof savePhotoSuccess>


export type PostType = {
   id?: string
   message: string
   countLike: number
}
export type ContactsType = {
   facebook: string | null
   vk: string | null
   twitter: string | null
   instagram: string | null
   youtube: string | null
   github: string | null
   mainLink: string | null
}
export type UserProfileType = {
   aboutMe: string
   contacts: ContactsType
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string
   userId: number
   photos: PhotosType
}
export type ProfilePageType = {
   posts: Array<PostType>
   profile: UserProfileType | null
   status: string | null
   photos: PhotosType
}