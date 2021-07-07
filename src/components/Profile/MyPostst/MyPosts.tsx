import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './MyPosts.module.scss';
import {Post} from "./Post/Posts";
import {PostType} from "../../../redux/profile-reducer";
import {PhotosType} from "../../../redux/users-reducer";

type MyPostsPropsType = {
   posts: PostType[]
   newPostsText: string
   onPostsChange: (text: string) => void
   addNewPost: () => void
   photoUser: PhotosType
}

export const MyPosts: React.FC<MyPostsPropsType> = (
   {posts,
      newPostsText,
      addNewPost,
      onPostsChange,
      photoUser
   }) => {

   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} photoUser={photoUser}/>);

   const addNewPostsHandler = () => {
      if (newPostsText.trim() === '') {
         return;
      }
      addNewPost()
   }

   const onPostsChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.currentTarget.value
      onPostsChange(text)
   }

   const onPressEnterToSendPostHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
         addNewPostsHandler();
      }
   }

   return (
      <>
         <div className={style.newPost}>
            <label>My post</label>
            <textarea
               placeholder="your news..."
               value={newPostsText}
               onChange={onPostsChangeHandler}
               onKeyPress={onPressEnterToSendPostHandler}
            />
            <div>
               <button className={style.btn} onClick={addNewPostsHandler}>Send</button>
            </div>
         </div>
         {postElements}
      </>
   );
};


