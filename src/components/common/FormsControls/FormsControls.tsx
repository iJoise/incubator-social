import React from "react";
import {WrappedFieldProps} from "redux-form";
import style from './FormsControls.module.scss'

const FormControl: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...restProps}) => {

   const errorStyle = touched && error ? `${style.fieldForm} ${style.error}` : ''

   return (
      <>
         <div className={`${style.formControl} ${errorStyle}`}>
            {restProps.children}
            {touched && error && <span className={`${style.error} ${style.error__span}`}>{error}</span>}
         </div>
      </>
   )
}


export const Textarea: React.FC<WrappedFieldProps> = React.memo((props) => {
   const {input, meta, children, ...restProps} = props
   return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
})

export const Input: React.FC<WrappedFieldProps> = React.memo((props) => {
   const {input, meta, children, ...restProps} = props
   return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
})

