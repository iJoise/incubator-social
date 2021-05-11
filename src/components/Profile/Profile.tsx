import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPostst/MyPosts';
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
   posts: PostsType[]
   pushNewPostInState: (newPost: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, pushNewPostInState}) => {
   return (
      <>
         <ProfileInfo />
         <MyPosts posts={posts} pushNewPostInState={pushNewPostInState}/>
      </>
   );
};

export default Profile;
