import {ActionType} from "./state";
import {v1} from "uuid";


export type DialogsType = {
   id: string
   name: string
   avatar: string
}
export type MessagesType = {
   id: string
   message: string
}
export type DialogsPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
   newMessage: string
}

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

const initialState: DialogsPageType = {
   dialogs: [
      {id: v1(), name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
      {id: v1(), name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
      {id: v1(), name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
      {id: v1(), name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
      {id: v1(), name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
   ] as DialogsType[],
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
   ] as MessagesType[],
   newMessage: ''
};

export const dialogReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         const message: MessagesType = {
            id: v1(),
            message: state.newMessage,
         };
         state.messages = [
            ...state.messages,
            message
         ]
         state.newMessage = '';
         return state;
      case CHANGE_NEW_MESSAGE:
         state.newMessage = action.newMessage;
         return state;
      default:
         return state;
   }
}

export const addMessageCreator = () => ({type: ADD_NEW_MESSAGE} as const);
export const changeNewMessageCreator = (newMessage: string) => ({
   type: CHANGE_NEW_MESSAGE,
   newMessage: newMessage
} as const);