import React, {ChangeEvent, Component, KeyboardEvent} from 'react';
import style from "./ProfileInfo.module.scss";

type ProfileStatusPropsType = {
   status: string | null
   updateStatus: (status: string) => void
}

type LocalStateType = {
   editMode: boolean
   status: string
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {

   state = {
      editMode: false,
      status: this.props.status
   }

   componentWillUnmount() {
      this.setState({
         status: ''
      })
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      });
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false,
         status: this.props.status
      });
      this.state.status && this.props.updateStatus(this.state.status)
   }

   onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(this.state.status)
      this.setState({
         status: e.currentTarget.value
      })
   }

   onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         this.deactivateEditMode();
      }
   }

   componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<LocalStateType>, snapshot?: any) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         });
      }
   }

   render() {
      return (
         <div className={style.status}>
            {
               this.state.editMode
                  ? <input
                     onChange={this.onStatusChangeHandler}
                     className={style.input}
                     value={this.state.status || ''}
                     onBlur={this.deactivateEditMode}
                     autoFocus
                     placeholder={'Расскажите друзьям как ваше настроение?'}
                     onKeyPress={this.onPressEnter}
                  />
                  : <div
                     className={style.profile__status}
                     onDoubleClick={this.activateEditMode}>
                     {this.props.status || 'Нажмите дважды что бы написать статус'}</div>
            }
         </div>
      );
   }
}
