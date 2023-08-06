import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "../../../entities/User/index";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    if (isAuth) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal &&
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            }
        </div>
    )
}
