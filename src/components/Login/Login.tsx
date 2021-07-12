import React from "react";
import s from "./Login.module.scss";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

type FormDataType = {
   login: string
   password: string
   rememberMe: boolean
}

const maxLength20 = maxLengthCreator(20)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={s.input_group}>
            <div className={s.input_group__prepend}>
               <span className={s.input_group__text}><i className="fa fa-user"/></span>
            </div>
            <Field
               type="text"
               className={s.form_control}
               placeholder="Username"
               component={Input}
               name={'login'}
               validate={[requiredField, maxLength20]}
            />
         </div>
         <div className={s.input_group}>
            <div className={s.input_group__prepend}>
               <span className={s.input_group__text}><i className="fa fa-lock"/></span>
            </div>
            <Field
               type="text"
               className={s.form_control}
               placeholder="Password"
               component={Input}
               name={'password'}
               validate={[requiredField, maxLength20]}
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
}

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)

type LoginPropsType = {}

export const Login: React.FC<LoginPropsType> = () => {

   const onSubmit = (formData: FormDataType) => {
      console.log(formData)
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
}
