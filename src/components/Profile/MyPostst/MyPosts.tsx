import React from 'react';
import style from './MyPosts.module.scss';
import {Post} from "./Post/Posts";
import {PostType} from "../../../redux/profile-reducer";
import {PhotosType} from "../../../redux/users-reducer";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPropsType = {
   posts: PostType[]
   addNewPost: (newPost: string) => void
   photoUser: PhotosType
}

export const MyPosts: React.FC<MyPostsPropsType> = (
   {posts,
      addNewPost,
      photoUser
   }) => {

   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} photoUser={photoUser}/>);

   const addNewPostsHandler = (data: AddPostFormPropsType) => {
      addNewPost(data.post)
   }

   return (
      <>
         <AddPostReduxForm onSubmit={addNewPostsHandler}/>
         {postElements}
      </>
   );
};


type AddPostFormPropsType = {
   post: string
}

const maxLength20 = maxLengthCreator(20);

export const AddPostForm: React.FC<InjectedFormProps<AddPostFormPropsType>> = (props) => {
   return (
      <form className={style.newPost} onSubmit={props.handleSubmit}>
         <label>My post</label>
         <Field
            placeholder="Your news..."
            component={Textarea}
            name={'post'}
            validate={[requiredField, maxLength20]}
         />
         <div>
            <button className={style.btn}>Send</button>
         </div>
      </form>
   )
}

const AddPostReduxForm = reduxForm<AddPostFormPropsType>({
   form: 'addPostForm'
})(AddPostForm)