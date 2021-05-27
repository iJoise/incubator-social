import {ActionType, DialogsPageType, MessagesType} from "./state";
import {v1} from "uuid";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

export const dialogReducer = (state: DialogsPageType, action: ActionType) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         const message: MessagesType = {
            id: v1(),
            message: state.newMessage,
         };
         state.messages.push(message)
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