import {chatApi, ChatMessageType} from "../api/chat-api";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";

const MESSAGES_RECEIVED = 'social/chat/MESSAGES_RECEIVED';


const initialState = {
   messages: [] as ChatMessageType[]
}

export const chatReducer = (state = initialState, action: ChatActionType) => {
   switch (action.type) {
      case MESSAGES_RECEIVED:
         return {
            ...state,
            messages: [...state.messages, ...action.payload.messages]
         }
      default:
         return state;
   }
}

export const actions = {
   messageReceived: (messages: ChatMessageType[]) => ({
      type: MESSAGES_RECEIVED, payload: {messages}
   } as const)
}


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
   if (_newMessageHandler === null) {
      _newMessageHandler = (messages) => {
         dispatch(actions.messageReceived(messages))
      }
   }

   return _newMessageHandler;
}

export const startMessagesListening = (): AppThunkType => async dispatch => {
   chatApi.start();
   chatApi.subscribe(newMessageHandlerCreator(dispatch));
}
export const stopMessagesListening = (): AppThunkType => async dispatch => {
   chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
   chatApi.stop();
}
export const sendMessage = (message: string): AppThunkType => async dispatch => {
   chatApi.sendMessage(message);
}

type SetMessageActionType = ReturnType<typeof actions.messageReceived>


export type ChatActionType = SetMessageActionType