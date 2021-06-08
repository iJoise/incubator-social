import React from 'react';
import style from './Posts.module.scss';
import {PostType} from "../../../../redux/profile-reducer";



export const Post: React.FC<PostType> = ({message,countLike}) => {
   return (
      <div className={style.post}>
         <div className={style.top}>
            <div className={style.top_image}>
               <img
                  src="https://source.unsplash.com/random/150x150/"
                  alt="avatar"
               />
            </div>
            <div className={style.top_right}>
               <h3>Kirill K.</h3>
               <p>21 apr 2021</p>
            </div>
         </div>
         <div className={style.middle}>
            <p>{message}</p>
         </div>
         <div className={style.bottom}>
            <div className={style.left}>
               <span>
                  <i className="fa fa-heart"/>
                  {countLike}
               </span>
            </div>
            <div className={style.right}>
               <i className="fa fa-eye"/>
            </div>
         </div>
      </div>
   );
};

