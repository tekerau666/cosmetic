import cls from './LoginForm.module.scss'
import {FC, memo, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../modal/slice/loginSlice";
import {loginByUserName} from "features/AuthByUsername/modal/services/loginByUserName/loginByUserName";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getLoginUsername} from "../../modal/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../modal/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../modal/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../modal/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
	className?: string,
}

const initialReducers:ReducersList = {
	loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch<any>()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error 	 = useSelector(getLoginError)

	const onChangeUsername = useCallback((value) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])

	const onChangePassword = useCallback((value) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])


	const onLoginClick = useCallback(() => {
		dispatch(loginByUserName({username, password}))
	}, [dispatch, username, password])

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={t('Форма авторизации')}/>
				{error &&
					<Text text={t('Неправильный логин или пароль')} theme={TextTheme.ERROR} />
				}
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите логин')}
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите пароль')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					className={cls.loginBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('Войти')}
				</Button>
			</div>
		</DynamicModuleLoader>

	)
})

export default LoginForm