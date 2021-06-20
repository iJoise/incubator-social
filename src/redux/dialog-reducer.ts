import {v1} from "uuid";

type ActionType = AddMessageActionType
| ChangeMessageActionType


export type DialogsType = {
   id: string
   name: string
   avatar: string
}
export type MessageType = {
   id: string
   message: string
}
export type DialogsPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessageType>
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
   ] as MessageType[],
   newMessage: ''
};

export const dialogReducer = (state = initialState, action: ActionType): DialogsPageType => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         const message: MessageType = {
            id: v1(),
            message: state.newMessage,
         };
         return {
            ...state,
            newMessage: '',
            messages: [...state.messages, message]
         }
      case CHANGE_NEW_MESSAGE:
         return {
            ...state,
            newMessage: action.newMessage
         }
      default:
         return state;
   }
}

export const addMessageAC = () => ({type: ADD_NEW_MESSAGE} as const);
export const changeNewMessageAC = (newMessage: string) => ({
   type: CHANGE_NEW_MESSAGE,
   newMessage: newMessage
} as const);

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type ChangeMessageActionType = ReturnType<typeof changeNewMessageAC>