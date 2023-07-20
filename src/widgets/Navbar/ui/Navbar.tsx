import {Link} from "react-router-dom";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "../../ThemeSwitcher/index";


interface NavbarProps {

}

export const Navbar = () => {
	return (
		<>
			<div className={cls.navbar}>
				<div className={cls.links}>
					<AppLink
						theme={AppLinkTheme.SECONDARY}
						to='/'
						className={cls.mainLink}
					>
						Главная
					</AppLink>

					<AppLink
						theme={AppLinkTheme.SECONDARY}
						to='/about'
					>
						О сайте
					</AppLink>

					<AppLink
						theme={AppLinkTheme.SECONDARY}
						to='#'
					>
						Cвязаться с нами
					</AppLink>
				</div>
			</div>
		</>
	)
}
