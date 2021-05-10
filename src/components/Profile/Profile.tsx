import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPostst/MyPosts';
import {ProfilePageType} from "../../redux/state";



const Profile: React.FC<ProfilePageType> = ({posts}) => {
   return (
      <>
         <ProfileInfo />
         <MyPosts posts={posts}/>
      </>
   );
};

export default Profile;
