import cls from './Test.module.scss'
import {FC} from "react";
import {classNames, Mods} from "shared/lib/classNames/classNames"

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign
}

export const Text: FC<TextProps> = ({title, text, theme = TextTheme.PRIMARY, className, align = TextAlign.LEFT}: TextProps) => {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames('', mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}