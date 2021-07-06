import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPostst/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
   profile: UserProfileType | null
   status: string | null
   updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

   const {profile, status, updateStatus} = props;


      return (
         <>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
         </>
      );
   };

