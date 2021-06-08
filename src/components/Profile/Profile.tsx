import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPostst/MyPostsContainer";


const Profile = () => {
   return (
      <>
         <ProfileInfo/>
         <MyPostsContainer/>
      </>
   );
};

export default Profile;
