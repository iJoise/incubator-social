import React from "react";
import s from "./Login.module.scss";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
   email: string
   password: string
   rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         {
            props.error && <div className={s.error}>{props.error}</div>
         }
         <div className={s.input_group}>
            <div className={s.input_group__prepend}>
               <span className={s.input_group__text}><i className="fa fa-user"/></span>
            </div>
            <Field
               type="text"
               className={s.form_control}
               placeholder="Email"
               component={Input}
               name={'email'}
               validate={[requiredField, maxLength30]}
            />
         </div>
         <div className={s.input_group}>
            <div className={s.input_group__prepend}>
               <span className={s.input_group__text}><i className="fa fa-lock"/></span>
            </div>
            <Field
               type="password"
               className={s.form_control}
               placeholder="Password"
               component={Input}
               name={'password'}
               validate={[requiredField, maxLength30]}
            />
         </div>

         <div className={s.message}>
            <Field
               component={Input}
               className={s.checkbox}
               type="checkbox"
               name={'rememberMe'}
            />
            <div>Remember</div>
         </div>
         <button className={`${s.btn}`}>LOGIN</button>
      </form>
   )
})

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)

type LoginPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void
   isAuth: boolean
}

const Login: React.FC<LoginPropsType> = React.memo(({login, isAuth}) => {

   const onSubmit = ({email, password, rememberMe}: FormDataType) => {
      login(email, password, rememberMe);
   }

   if (isAuth) {
      return <Redirect to={'/profile'}/>
   }

   return (
      <div className={s.container}>
         <div className={s.form_box}>
            <div className={s.header_form}>
               <h4 className={`${s.text_primary} ${s.text_center}`}>
                  <i className="fa fa-user-circle"/>
               </h4>
            </div>
            <LoginReduxForm onSubmit={onSubmit} />
            <div className={s.social}>
               <a href="https://facebook.com/"><i className="fa fa-facebook"/></a>
               <a href="https://twitter.com/"><i className="fa fa-twitter-square"/></a>
               <a href="https://www.google.com/"><i className="fa fa-google"/></a>
            </div>
         </div>
      </div>
   )
})

type MapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateToPropsType = {
   isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>( mapStateToProps, {login})(Login)
