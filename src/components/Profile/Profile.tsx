import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPostst/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
   profile: UserProfileType | null
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

   const {profile} = props;
      return (
         <>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
         </>
      );
   };

