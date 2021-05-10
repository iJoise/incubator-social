import React from 'react';
import style from './MyPosts.module.scss';
import Post from "./Post/Posts";
import {ProfilePageType} from "../../../redux/state";


const MyPosts:React.FC<ProfilePageType> = ({posts}) => {
   const postElements = posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} />);
   return (
      <>
         <form className={style.newPost}>
            <label htmlFor="#post">My post</label>
            <textarea id="post" placeholder="your news..."/>
            <div>
               <button className={style.btn}>Send</button>
            </div>
         </form>
         {postElements}
      </>
   );
};

export default MyPosts;
