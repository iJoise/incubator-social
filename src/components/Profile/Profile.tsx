import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPostst/MyPosts';
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
   posts: PostsType[]
   pushNewPostInState: () => void
   newPostsText: string
   changeNewPostInState: (newText: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, pushNewPostInState, newPostsText, changeNewPostInState}) => {
   return (
      <>
         <ProfileInfo/>
         <MyPosts
            posts={posts}
            pushNewPostInState={pushNewPostInState}
            newPostsText={newPostsText}
            changeNewPostInState={changeNewPostInState}
         />
      </>
   );
};

export default Profile;
