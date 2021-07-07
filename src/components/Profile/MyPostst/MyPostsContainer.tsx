import {addPostAC, changeNewPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from 'react-redux';
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PhotosType} from "../../../redux/users-reducer";

type MapDispatchToPropsType = {
   addNewPost: () => void
   onPostsChange: (text: string) => void
}

type MyPostMapStateToPropsType = {
   posts: PostType[]
   newPostsText: string
   photoUser: PhotosType
}


const mapStateToProps = (state: AppStateType): MyPostMapStateToPropsType => {
   return {
      posts: state.profilePage.posts,
      newPostsText: state.profilePage.newPostsText,
      photoUser: state.profilePage.photos
   }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addNewPost: () => {
         dispatch(addPostAC())
      },
      onPostsChange: (text: string) => {
         dispatch(changeNewPostAC(text));
      }
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
