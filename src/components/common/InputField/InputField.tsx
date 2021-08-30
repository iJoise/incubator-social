import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from "./InputField.module.scss";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputFieldPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
   onChangeText?: (value: string) => void
   onEnter?: () => void
   error?: string | null
   spanClassName?: string
   label?: string
   name?: string
}


export const InputField: React.FC<InputFieldPropsType> = (
   {
      onChange, onChangeText,
      onKeyPress, onEnter,
      error,
      className, spanClassName,
      label,
      name,
      ...restProps
   }
) => {
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange
      && onChange(e)

      onChangeText && onChangeText(e.currentTarget.value)
   }
   const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyPress && onKeyPress(e);

      onEnter
      && e.key === 'Enter'
      && onEnter()
   }


   const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
   const finalInputClassName = `${s.input} ${error && s.input__error}`

   return (
      <div className={s.inputField}>
         <label aria-required={true}>{label}</label>
         <input
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            className={finalInputClassName}
            name={name}
            {...restProps}
         />
         <div className={s.inputField__error}>{error && <span className={finalSpanClassName}>{error}</span>}</div>
      </div>
   )
}
