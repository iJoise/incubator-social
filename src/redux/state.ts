export type PostsType = {
   id?: number
   message: string
   countLike: number
}
export type DialogsType = {
   id: number
   name: string
   avatar: string
}
export type MessagesType = {
   id: number
   message: string
}
export type FriendsType = {
   id: number
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
            id: 1,
            message: 'Lorem ipsum dolor, sit amet consecrated animistic elicit. Possimus ipsum sit voluptate sapiente ratione vero magnidoloremque modi quit.',
            countLike: 10
         },
         {
            id: 2,
            message: 'Lorem ipsum dolor, sit amet consecrated animistic elicit. Possimus ipsum sit voluptate sapiente ratione vero magnidoloremque modi qui.',
            countLike: 32
         }
      ]
   },
   dialogsPage: {
      dialogs: [
         {id: 1, name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
         {id: 2, name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
         {id: 3, name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
         {id: 4, name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
         {id: 5, name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
      ],
      messages: [
         {
            id: 1,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestiassdfsd '
         },
         {
            id: 2,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 3,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias '
         },
         {
            id: 5,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 6,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 7,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 8,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 9,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 10,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 11,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 12,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 13,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias sdasdas'
         },
         {
            id: 14,
            message:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, molestias '
         }
      ]
   },
   sidebar: {
      friends: [
         {id: 1, name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
         {id: 2, name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
         {id: 3, name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
         {id: 4, name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
         {id: 5, name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
      ]
   }
}

export const pushNewPostInState = (newPost: string) => {
   debugger
   const post: PostsType = {
      id: 3,
      message: newPost,
      countLike: 3
   };
   state.profilePage.posts.push(post);
}