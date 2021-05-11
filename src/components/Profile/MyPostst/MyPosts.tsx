import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.scss';
import {Post} from "./Post/Posts";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
   posts: PostsType[]
   pushNewPostInState: () => void
   newPostsText: string
   changeNewPostInState: (newText: string) => void
}

export const MyPosts:React.FC<MyPostsPropsType> = ({posts, pushNewPostInState, newPostsText, changeNewPostInState}) => {
   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} />);

   const addNewPosts = () => {
         pushNewPostInState();
   }

   const onPostsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         const text = e.currentTarget.value
         changeNewPostInState(text.trim())
   }

   return (
      <>
         <div className={style.newPost}>
            <label >My post</label>
            <textarea
               placeholder="your news..."
               value={newPostsText}
               onChange={onPostsChange}
            />
            <div>
               <button className={style.btn} onClick={addNewPosts}>Send</button>
            </div>
         </div>
         {postElements}
      </>
   );
};


