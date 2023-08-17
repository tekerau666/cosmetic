import cls from './Input.module.scss'
import {ChangeEvent, FC, InputHTMLAttributes, memo} from "react";
import {classNames, Mods} from "shared/lib/classNames/classNames"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean
}

export const Input: FC<InputProps> = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }
    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            {placeholder &&
                <div className={cls.placeholder}>
                    {placeholder + ':'}
                </div>
            }
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    className={cls.input}
                    readOnly={readonly}
                    {...otherProps}
                />
        </div>
    )
})