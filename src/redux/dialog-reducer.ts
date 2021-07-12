import {v1} from "uuid";

type ActionType = AddMessageActionType;

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
}

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
};

export const dialogReducer = (state = initialState, action: ActionType): DialogsPageType => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         const message: MessageType = {
            id: v1(),
            message: action.newMessage
         };
         return {
            ...state,
            messages: [...state.messages, message]
         }
      default:
         return state;
   }
}

export const addMessageAC = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage} as const);

export type AddMessageActionType = ReturnType<typeof addMessageAC>
