import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ActionType} from "./redux-store";

type PostsType = {
   id?: string
   message: string
   countLike: number
}
type DialogsType = {
   id: string
   name: string
   avatar: string
}
type MessagesType = {
   id: string
   message: string
}
type FriendsType = {
   id: string
   name: string
   avatar: string
}
type ProfilePageType = {
   posts: Array<PostsType>
   newPostsText: string
}
type DialogsPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
   newMessage: string
}
type SidebarType = {
   friends: Array<FriendsType>
}
type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarType
}

type StoreType = {
   _state: RootStateType
   _callSubscriber: () => void
   subscribe: (observer: () => void) => void
   getState: () => RootStateType
   dispatch: (action: ActionType) => void
}


export const store: StoreType = {
   _state: {
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
         ],
         newPostsText: ''
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
         ],
         newMessage: ''
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
   },
   _callSubscriber() {
      console.log('state changed')
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._callSubscriber();
   }
}