import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import {classNames} from "../../lib/classNames/classNames"


export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
	className?: string,
	theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = ({
											 children,
											 className,
											 theme= AppLinkTheme.PRIMARY,
											 to,
											 ...otherProps}) =>
{
	return (
		<>
			<Link
				className={classNames(cls.AppLink, {}, [className, cls[theme]] )}
				to={to}
				{...otherProps}
			>
				{children}
			</Link>
		</>
	)
}