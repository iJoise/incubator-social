import {chatApi, ChatMessageAPIType, EventNameConstant, STATUS_CHAT} from "../api/chat-api";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";
import {v1} from "uuid";

const MESSAGES_RECEIVED = 'social/chat/MESSAGES_RECEIVED';
const STATUS_CHANGED = 'social/chat/STATUS_CHANGED';


export type ChatMessageType = ChatMessageAPIType & {id: string}

const initialState: InitialStateType = {
   messages: [] as ChatMessageType[],
   status: STATUS_CHAT.Ready
}

export const chatReducer = (state = initialState, action: ChatActionType) => {
   switch (action.type) {
      case MESSAGES_RECEIVED:
         return {
            ...state,
            messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
         }
      case STATUS_CHANGED:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
}

export const actions = {
   messageReceived: (messages: ChatMessageAPIType[]) => ({
      type: MESSAGES_RECEIVED, payload: {messages}
   } as const),
   statusChanged: (status: STATUS_CHAT) => ({
      type: STATUS_CHANGED, payload: {status}
   } as const)
}


let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
   if (_newMessageHandler === null) {
      _newMessageHandler = (messages) => {
         dispatch(actions.messageReceived(messages))
      }
   }

   return _newMessageHandler;
}

let _statusChangedHandler: ((status: STATUS_CHAT) => void) | null = null;
const statusChangedCreator = (dispatch: Dispatch) => {
   if (_statusChangedHandler === null) {
      _statusChangedHandler = (status) => {
         dispatch(actions.statusChanged(status))
      }
   }

   return _statusChangedHandler;
}

export const startMessagesListening = (): AppThunkType => async dispatch => {
   chatApi.start();
   chatApi.subscribe(EventNameConstant.Messages_Received, newMessageHandlerCreator(dispatch));
   chatApi.subscribe(EventNameConstant.Status_Changed, statusChangedCreator(dispatch));
}
export const stopMessagesListening = (): AppThunkType => async dispatch => {
   chatApi.unsubscribe(EventNameConstant.Messages_Received, newMessageHandlerCreator(dispatch));
   chatApi.unsubscribe(EventNameConstant.Status_Changed, statusChangedCreator(dispatch));
   chatApi.stop();
}
export const sendMessage = (message: string): AppThunkType => async dispatch => {
   chatApi.sendMessage(message);
}

type SetMessageActionType = ReturnType<typeof actions.messageReceived>
type SetStatusActionType = ReturnType<typeof actions.statusChanged>

type InitialStateType = {
   messages: ChatMessageType[],
   status: STATUS_CHAT
}


export type ChatActionType = SetMessageActionType
 | SetStatusActionType