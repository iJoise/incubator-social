import React from 'react';
import style from './ProfileInfo.module.scss';

export const ProfileInfo = () => {
   return (
      <>
         <div className={style.content_img}>
            <img
               src="http://megamixgroup.com/wp-content/uploads/2017/09/vseti.jpg"
               alt="headImage"
            />
         </div>
         <div className={style.profile}>
            <img
               src="https://source.unsplash.com/random/150x150/"
               alt="this is avatar"
            />
            <div className={style.profile_body}>
               <h3>Kirill K.</h3>
               <p>
                  Date of Birth:
                  <span>27 april</span>
               </p>
               <p>
                  Sity:
                  <span>Prorkopievsk</span>
               </p>
               <p>
                  Education:
                  <span>Frontend Engineer</span>
               </p>
               <p>
                  Website:
                  <span>
                     {/* eslint-disable-next-line react/jsx-no-target-blank */}
                     <a target="_blank" href="https://github.com/iJoise">
                        https://github.com/iJoise
                     </a>
                  </span>
               </p>
            </div>
         </div>
      </>
   );
};

