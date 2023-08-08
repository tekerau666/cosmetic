import cls from './Test.module.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames"

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
}

export const Text: FC<TextProps> = ({title, text, theme = TextTheme.PRIMARY, className}: TextProps) => {
    return (
        <div className={classNames('', {[cls[theme]]: true}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}