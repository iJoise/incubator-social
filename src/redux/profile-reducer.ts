import {v1} from 'uuid';
import {PhotosType} from "./users-reducer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
}

type ActionType = AddNewPostActionType
   | ChangeNewPostActionType
   | SetUserProfileType


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
      default:
         return state;
   }
}

export const addPostAC = () => ({type: ADD_NEW_POST} as const);
export const changeNewPostAC = (newText: string) => ({type: CHANGE_NEW_POST, newText: newText} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)

//thunk creator
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
   usersAPI.getProfile(userId)
      .then((data: UserProfileType) => {
         dispatch(setUserProfileAC(data));
      });
}

export type AddNewPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewPostActionType = ReturnType<typeof changeNewPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>
