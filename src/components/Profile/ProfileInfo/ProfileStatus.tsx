import React, {Component} from 'react';
import style from "./ProfileInfo.module.scss";

type ProfileStatusPropsType = {
   status: string | null
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
   state = {
      editMode: false,
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () =>{
      this.setState({
         editMode: false
      })
   }

   render() {
      return (
         <div className={style.status}>
            {
               this.state.editMode
                  ? <input
                     className={style.input}
                     value={this.props.status || ''}
                     onBlur={this.deactivateEditMode}
                     autoFocus
                     placeholder={'Расскажите друзьям как ваше настроение?'}
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
