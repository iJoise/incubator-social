import {ActionType, PostsType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";



export const profileReducer = (state: ProfilePageType, action: ActionType) => {
   switch (action.type) {
      case ADD_NEW_POST:
         const post: PostsType = {
            id: v1(),
            message: state.newPostsText,
            countLike: 3
         };
         state.posts.unshift(post);
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