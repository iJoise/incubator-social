import React, {ChangeEvent} from 'react';
import style from './ProfileInfo.module.scss';
import {UserProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import profileHeader from '../../../assets/images/vseti.jpeg';
import instagram from '../../../assets/images/icon/instagram.png';
import facebook from '../../../assets/images/icon/facebook.png';
import github from '../../../assets/images/icon/github.png';
import twitter from '../../../assets/images/icon/twitter.png';
import website from '../../../assets/images/icon/website.png';
import vk from '../../../assets/images/icon/vk.png';
import youtube from '../../../assets/images/icon/youtube.png';
import {ProfileStatus} from './ProfileStatus'


type ProfileInfoPropsType = {
   profile: UserProfileType | null
   status: string | null
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photo: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo((props) => {

   const {profile, status, updateStatus, isOwner, savePhoto} = props;

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
               <ProfileStatus
                  status={status}
                  updateStatus={updateStatus}
               />
               <div className={style.profile__jobInfo}>
                  <p className={style.profile__jobSearch}>В поиске работы:
                     <span>{profile.lookingForAJob ? '✅' : '❌'}</span></p>
                  {
                     profile.lookingForAJobDescription && <p className={style.profile__jobSearch}>
                        {profile.lookingForAJobDescription}
                     </p>
                  }
               </div>
               <div className={style.profile__social}>
                  {profile.contacts.github &&
                  <a href={profile.contacts.github}><img src={github} alt="github"/></a>}
                  {profile.contacts.facebook &&
                  <a href={profile.contacts.facebook}><img src={facebook} alt="facebook"/></a>}
                  {profile.contacts.instagram &&
                  <a href={profile.contacts.instagram}><img src={instagram} alt="instagram"/></a>}
                  {profile.contacts.twitter &&
                  <a href={profile.contacts.twitter}><img src={twitter} alt="twitter"/></a>}
                  {profile.contacts.vk &&
                  <a href={profile.contacts.vk}><img src={vk} alt="twitter"/></a>}
                  {profile.contacts.youtube &&
                  <a href={profile.contacts.youtube}><img src={youtube} alt="youtube"/></a>}
                  {profile.contacts.website &&
                  <a href={profile.contacts.website}><img src={website} alt="website"/></a>}
               </div>
            </div>
         </div>
      </>
   );
});

