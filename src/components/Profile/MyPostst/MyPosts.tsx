import React from 'react';
import style from './MyPosts.module.scss';
import {Post} from "./Post/Posts";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts:React.FC<ProfilePageType> = ({posts}) => {
   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} />);

   const newPostRef = React.createRef<HTMLTextAreaElement>();

   const addNewPosts = () => {
      alert(newPostRef.current?.value)
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


