import {addMessageAC, changeNewMessageAC, MessageType} from "../../../redux/dialog-reducer";
import {MessagesList} from "./MessagesList";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MessageListMapStateToPropsType = {
   messages: MessageType[]
   newMessage: string
}

type MapDispatchToPropsType = {
   sendMessage: () => void
   onChangeMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): MessageListMapStateToPropsType => {
   return {
      messages: state.dialogPage.messages,
      newMessage: state.dialogPage.newMessage
   }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
   return {
      sendMessage: () => {
         dispatch(addMessageAC())
      },
      onChangeMessage: (message: string) => {
         dispatch(changeNewMessageAC(message));
      }
   }
}

export const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList)