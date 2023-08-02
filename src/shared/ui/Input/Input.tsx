import cls from './Input.module.scss'
import {ChangeEvent, FC, InputHTMLAttributes, memo} from "react";
import {classNames} from "shared/lib/classNames/classNames"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
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
                    {...otherProps}
                />
        </div>
    )
})