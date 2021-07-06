import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeNewMessageAC, DialogsType, MessageType} from "../../redux/dialog-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
   messages: MessageType[]
   newMessage: string
   dialogs: DialogsType[]
}

type MapDispatchToPropsType = {
   sendMessage: () => void
   onChangeMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      messages: state.dialogPage.messages,
      newMessage: state.dialogPage.newMessage,
      dialogs: state.dialogPage.dialogs,
   }
}


export const DialogsContainer = withAuthRedirectComponent(
   connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
      sendMessage: addMessageAC,
      onChangeMessage: changeNewMessageAC,
   })(Dialogs));