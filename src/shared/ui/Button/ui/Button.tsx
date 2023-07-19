import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "../../../lib/classNames/classNames"

const enum ThemeButton {
	CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string,
	theme?: ThemeButton
}

export const Button:FC<ButtonProps> = (props) => {

    const {className, children, theme, ...otherProps} = props

	return (
		<>
			<button
				className={classNames(cls.Button, {}, [className, cls[theme]])}
				{...otherProps}
			>
				{children}
			</button>
		</>
	)
}