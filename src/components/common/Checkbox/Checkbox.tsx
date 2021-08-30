import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Checkbox.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const change = e.currentTarget.checked;
        onChange && onChange(e);
        onChangeChecked && onChangeChecked(change)
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label className={s.label}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
}

export default SuperCheckbox
