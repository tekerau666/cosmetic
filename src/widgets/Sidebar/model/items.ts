import {SVGProps, VFC} from 'react';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import HomePageIcon from 'shared/assets/icons/home-page.svg';
import AboutAsIcon from 'shared/assets/icons/about-as.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
export interface SidebarItemsType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemsType[] = [
	{
		path: RoutePath.main,
		text: 'Главная',
		Icon: HomePageIcon
	},
	{
		path: RoutePath.about,
		text: 'О нас',
		Icon: AboutAsIcon
	},
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: ProfileIcon,
		authOnly: true
	}
];