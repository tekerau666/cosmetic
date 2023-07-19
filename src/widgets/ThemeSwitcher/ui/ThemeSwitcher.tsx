import cls from './ThemeSwitcher.module.scss'
import {FC} from "react";
import {classNames} from "../../../shared/lib/classNames/classNames"
import { useTheme, Theme} from "../../../app/providers/ThemeProvider";
import {ReactComponent as DarkIcon} from '../../../shared/assets/icons/theme-dark.svg'
import {ReactComponent as LightIcon} from '../../../shared/assets/icons/theme-light.svg'
import {Button} from "../../../shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
	className?: string,
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({children, className}) => {
	const {theme, toggleTheme} = useTheme();
	return (
		<>
			<Button
				theme={'clear'}
				className={classNames(cls.ThemeSwitcher, {}, [className])}
				onClick={toggleTheme}
			>
				{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
			</Button>
		</>
	)
}