import cls from './ProfileCard.module.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/modal/selectors/getProfileData/getProfileData";
import {getProfileError} from "entities/Profile/modal/selectors/getProfileError/getProfileError";
import {getProfileIsLoading} from "entities/Profile/modal/selectors/getProfileIsLoading/getProfileIsLoading";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";


interface ProfileCardProps {
	className?: string,
}

export const ProfileCard:FC<ProfileCardProps> = ({ children, className }) => {
	const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
                <Text title={t('Профиль пользователя')}/>
                <Button theme={ButtonTheme.OUTLINE} className={cls.btn}>
                    {t('Редактировать')}
                </Button>
            </div>
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