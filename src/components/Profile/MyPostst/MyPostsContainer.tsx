import {addPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from 'react-redux';
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PhotosType} from "../../../redux/users-reducer";

type MapDispatchToPropsType = {
   addNewPost: (newPost: string) => void
}

type MyPostMapStateToPropsType = {
   posts: PostType[]
   photoUser: PhotosType
}


const mapStateToProps = (state: AppStateType): MyPostMapStateToPropsType => {
   return {
      posts: state.profilePage.posts,
      photoUser: state.profilePage.photos
   }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addNewPost: (newPost: string) => {
         dispatch(addPostAC(newPost))
      },
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
