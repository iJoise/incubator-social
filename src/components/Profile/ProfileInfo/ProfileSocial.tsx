import React from "react";
import style from "./ProfileInfo.module.scss";
import github from "../../../assets/images/icon/github.png";
import facebook from "../../../assets/images/icon/facebook.png";
import instagram from "../../../assets/images/icon/instagram.png";
import twitter from "../../../assets/images/icon/twitter.png";
import vk from "../../../assets/images/icon/vk.png";
import youtube from "../../../assets/images/icon/youtube.png";
import website from "../../../assets/images/icon/website.png";
import {UserProfileType} from "../../../redux/profile-reducer";

type ProfileSocialPropsType = {
   profile: UserProfileType | null
}


export const ProfileSocial: React.FC<ProfileSocialPropsType> = ({profile}) => {

   return (
      <div className={style.profile__social}>
         {profile?.contacts.github &&
         <a href={profile.contacts.github}><img src={github} alt="github"/></a>}
         {profile?.contacts.facebook &&
         <a href={profile.contacts.facebook}><img src={facebook} alt="facebook"/></a>}
         {profile?.contacts.instagram &&
         <a href={profile.contacts.instagram}><img src={instagram} alt="instagram"/></a>}
         {profile?.contacts.twitter &&
         <a href={profile.contacts.twitter}><img src={twitter} alt="twitter"/></a>}
         {profile?.contacts.vk &&
         <a href={profile.contacts.vk}><img src={vk} alt="vk"/></a>}
         {profile?.contacts.youtube &&
         <a href={profile.contacts.youtube}><img src={youtube} alt="youtube"/></a>}
         {profile?.contacts.mainLink &&
         <a href={profile.contacts.mainLink}><img src={website} alt="website"/></a>}
      </div>
   )
}
