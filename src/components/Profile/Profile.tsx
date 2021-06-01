import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPostst/MyPosts';
import {ActionType} from "../../redux/state";
import {PostsType} from "../../redux/profile-reducer";

type ProfilePropsType = {
   posts: PostsType[]
   newPostsText: string
   dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, newPostsText, dispatch}) => {
   return (
      <>
         <ProfileInfo/>
         <MyPosts
            posts={posts}
            newPostsText={newPostsText}
            dispatch={dispatch}
         />
      </>
   );
};

export default Profile;
