import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './MyPosts.module.scss';
import {Post} from "./Post/Posts";
import {addPostCreator, changeNewPostCreator} from "../../../redux/profile-reducer";
import {PostsType, ActionType} from "../../../redux/state";

type MyPostsPropsType = {
   posts: PostsType[]
   newPostsText: string
   dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostsText, dispatch}) => {
   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike}/>);

   const addNewPosts = () => {
      if (newPostsText.trim() === '') {
         return;
      }
      dispatch(addPostCreator());
   }

   const onPostsChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

      const text = e.currentTarget.value
      dispatch(changeNewPostCreator(text));
   }

   const onPressEnterToSendPostHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (newPostsText.trim() === '') {
         return;
      }
      if (event.key === 'Enter') {
         dispatch(addPostCreator());
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
               <button className={style.btn} onClick={addNewPosts}>Send</button>
            </div>
         </div>
         {postElements}
      </>
   );
};


