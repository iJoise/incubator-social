import {DialogList} from "./DialogList";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {DialogsType} from "../../../redux/dialog-reducer";

export type DialogListContainerMapStateToPropsType = {
   dialogs: DialogsType[]
}

const mapStateToProps = (state: AppStateType) => {
   return {
      dialogs: state.dialogPage.dialogs,
   }
}

const mapDispatchToProps = () => {
   return {

   }
}

export const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList)
