import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({className}: NavbarProps) => (
	<div className={classNames(cls.Navbar, {}, [className || ''])}>
		<div className={cls.links}>
			<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
			</AppLink>
			<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    О сайте
			</AppLink>
		</div>
	</div>
);

