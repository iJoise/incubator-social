import React from 'react';
import style from './MyPosts.module.scss';
import {Post} from "./Post/Posts";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
   posts: PostsType[]
   pushNewPostInState: (newPost: string) => void
}

export const MyPosts:React.FC<MyPostsPropsType> = ({posts, pushNewPostInState}) => {
   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} />);

   const newPostRef = React.createRef<HTMLTextAreaElement>();

   const addNewPosts = () => {
      if (newPostRef.current) {
         const post = newPostRef.current.value;
         pushNewPostInState(post);
      }
   }

   return (
      <>
         <form className={style.newPost}>
            <label >My post</label>
            <textarea ref={newPostRef} placeholder="your news..."/>
            <div>
               <button className={style.btn} onClick={addNewPosts}>Send</button>
            </div>
         </form>
         {postElements}
      </>
   );
};


