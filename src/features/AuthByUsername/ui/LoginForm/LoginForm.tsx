import cls from './LoginForm.module.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface LoginFormProps {
	className?: string,
}

export const LoginForm:FC<LoginFormProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Введите логин')}/>
            <Input type="text" className={cls.input} placeholder={t('Введите пароль')}/>
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
		</div>
	)
}