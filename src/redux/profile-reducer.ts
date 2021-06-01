import {ActionType} from "./state";
import {v1} from "uuid";


export type PostsType = {
   id?: string
   message: string
   countLike: number
}
export type ProfilePageType = {
   posts: Array<PostsType>
   newPostsText: string
}

const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

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
   ] as PostsType[],
   newPostsText: ''
}

export const profileReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case ADD_NEW_POST:
         const post: PostsType = {
            id: v1(),
            message: state.newPostsText,
            countLike: 3
         };
         state.posts = [
            post,
            ...state.posts
         ]
         state.newPostsText = '';
         return state;
      case CHANGE_NEW_POST:
         state.newPostsText = action.newText;
         return state;
      default:
         return state;
   }
}

export const addPostCreator = () => ({type: ADD_NEW_POST} as const);
export const changeNewPostCreator = (newText: string) => ({
   type: CHANGE_NEW_POST,
   newText: newText
} as const);