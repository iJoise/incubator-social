import React, {ChangeEvent, useState} from 'react';
import style from './ProfileInfo.module.scss';
import {UserProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import profileHeader from '../../../assets/images/vseti.jpeg';
import {ProfileStatus} from './ProfileStatus'
import {ProfileSocial} from "./ProfileSocial";
import {ProfileModal} from "./ProfileModal/ProfileModal";
import {ProfileUpdateType} from "../../../api/api";


type ProfileInfoPropsType = {
   profile: UserProfileType | null
   status: string | null
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photo: File) => void
   saveProfile: (data: ProfileUpdateType) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo((props) => {

   const {profile, status, updateStatus, isOwner, savePhoto, saveProfile} = props;

   const [modalActive, setModalActive] = useState(false);

   const openModalHandler = (value: boolean) => {
      setModalActive(value);
   }

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      e.target.files
      && e.target.files.length
      && savePhoto(e.target.files[0])
   }

   if (!profile) {
      return <Preloader/>
   }

   return (
      <>
         <div className={style.content_img}>
            <img src={profileHeader} alt="headImage"/>
         </div>
         <div className={style.profile}>
            <div className={style.profile__avatar}>
               <img src={profile.photos.large ? profile.photos.large : userPhoto} alt="this is avatar"/>
               {isOwner && <input className={style.profile__load} type="file" onChange={onMainPhotoSelected}/>}
            </div>
            <div className={style.profile__body}>
               <h3>{profile.fullName}</h3>
               <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
               {
                  profile.aboutMe && <p className={style.profile__about}>
                    About Me: <span>{profile.aboutMe}</span></p>
               }
               <div className={style.profile__jobInfo}>
                  <p className={style.profile__jobSearch}>В поиске работы:
                     <span>{profile.lookingForAJob ? '✅' : '❌'}</span></p>
                  {
                     profile.lookingForAJobDescription && <p className={style.profile__jobSearch}>
                        Description: <span>{profile.lookingForAJobDescription}</span></p>
                  }
                  {isOwner && <button
                     onClick={() => openModalHandler(true)}
                     className={style.profile__updateProfile}
                  >Update profile...</button>}
               </div>
               <ProfileSocial profile={profile}/>
            </div>
            {isOwner && <ProfileModal profile={profile} saveProfile={saveProfile} modalActive={modalActive} setModalActive={setModalActive}/>}
         </div>
      </>
   );
});

