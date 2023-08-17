import cls from './ProfileCard.module.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Input} from "shared/ui/Input/Input";
import {Profile} from "../../modal/types/Profile";
import {Loader} from "shared/ui/Loader/Loader";
import {useSelector} from "react-redux";
import {getProfileReadonly} from "entities/Profile/modal/selectors/getProfileReadonly/getProfileReadonly";


interface ProfileCardProps {
	className?: string,
    data?: Profile,
    isLoading: boolean | undefined,
    error?: string
}

export const ProfileCard:FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error
    } = props
	const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка. Профиль пользователя не найден')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    placeholder={t('Имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Фамилия')}
                    className={cls.input}
                />
            </div>
		</div>
	)
}