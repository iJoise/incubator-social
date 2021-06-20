import {addMessageAC, changeNewMessageAC, MessageType} from "../../../redux/dialog-reducer";
import {MessagesList} from "./MessagesList";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";


type MessageListMapStateToPropsType = {
   messages: MessageType[]
   newMessage: string
}


const mapStateToProps = (state: AppStateType): MessageListMapStateToPropsType => {
   return {
      messages: state.dialogPage.messages,
      newMessage: state.dialogPage.newMessage
   }
}


export const MessagesListContainer = connect(mapStateToProps, {
   sendMessage: addMessageAC,
   onChangeMessage: changeNewMessageAC,
})(MessagesList)