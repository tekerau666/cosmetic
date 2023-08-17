import cls from './ProfilePageHeader.module.scss'
import {FC, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getProfileReadonly} from "entities/Profile/modal/selectors/getProfileReadonly/getProfileReadonly";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {profileActions} from "entities/Profile";


interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({className}) => {
    const {t} = useTranslation()
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    },[])
    const onCanceled = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    },[])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль пользователя')}/>
            {readonly ?
                (
                <Button theme={ButtonTheme.OUTLINE} className={cls.btn} onClick={onCanceled}>
                    {t('Редактировать')}
                </Button>
                )
                :
                (
                <Button theme={ButtonTheme.OUTLINE} className={cls.btn} onClick={onEdit}>
                    {t('Отменить')}
                </Button>
                )
            }
        </div>
    )
}