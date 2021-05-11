import {renderEntireTree} from "../render";
import {v1} from "uuid";

export type PostsType = {
   id?: string
   message: string
   countLike: number
}
export type DialogsType = {
   id: string
   name: string
   avatar: string
}
export type MessagesType = {
   id: string
   message: string
}
export type FriendsType = {
   id: string
   name: string
   avatar: string
}

export type ProfilePageType = {
   posts: Array<PostsType>
}
export type DialogsPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
}
export type SidebarType = {
   friends: Array<FriendsType>
}

export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarType
}

export const state: RootStateType = {
   profilePage: {
      posts: [
         {
            id: v1(),
            message: 'Lorem ipsum dolor, sit amet consecrated animistic elicit. Possimus ipsum sit voluptate sapiente ratione vero magnidoloremque modi quit.',
            countLike: 10
         },
         {
            id: v1(),
            message: 'Lorem ipsum dolor, sit amet consecrated animistic elicit. Possimus ipsum sit voluptate sapiente ratione vero magnidoloremque modi qui.',
            countLike: 32
         }
      ]
   },
   dialogsPage: {
      dialogs: [
         {id: v1(), name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
         {id: v1(), name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
         {id: v1(), name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
         {id: v1(), name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
         {id: v1(), name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
      ],
      messages: [
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestiassdfsd '
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias '
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: v1(),
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias '
         }
      ]
   },
   sidebar: {
      friends: [
         {id: v1(), name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
         {id: v1(), name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
         {id: v1(), name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
         {id: v1(), name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
         {id: v1(), name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
      ]
   }
}

export const pushNewPostInState = (newPost: string) => {
   const post: PostsType = {
      id: v1(),
      message: newPost,
      countLike: 3
   };
   state.profilePage.posts.push(post);
   renderEntireTree(state);
}