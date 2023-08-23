import cls from './SidebarItem.module.scss'
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {SidebarItemsType} from "widgets/Sidebar/model/items";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../entities/User";


interface SidebarItemProps {
    item: SidebarItemsType,
    collapsed: boolean,
}

export const SidebarItem = ({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation()
    const isAuth = useSelector(getUserAuthData)
    if (item.authOnly && !isAuth) {
        return null
    }
    return (
        <div>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(cls.item, {[cls.collapsed]: collapsed})}
                >
                    <item.Icon className={cls.icon}/>
                    <span className={cls.link}>
                            {t(item.text)}
                    </span>
                </AppLink>
            </div>
        </div>
    )
}