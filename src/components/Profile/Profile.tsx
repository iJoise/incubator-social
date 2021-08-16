import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPostst/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
   profile: UserProfileType | null
   status: string | null
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photo: File) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {

   const {profile, status, updateStatus, isOwner, savePhoto} = props;


      return (
         <>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer/>
         </>
      );
   });

