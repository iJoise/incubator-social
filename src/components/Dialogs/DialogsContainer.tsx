import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageAC, DialogsType} from "../../redux/dialog-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";


type MapStateToPropsType = {
   dialogs: DialogsType[]
}

type MapDispatchToPropsType = {
   sendMessage: (newMessage:string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      dialogs: state.dialogPage.dialogs,
   }
}


const DialogsContainer = compose<React.ComponentType>(
   connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
      sendMessage: addMessageAC,
   }),
   withAuthRedirectComponent
)(Dialogs);

export default DialogsContainer;