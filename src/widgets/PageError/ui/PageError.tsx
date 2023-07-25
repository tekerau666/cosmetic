import cls from './PageError.module.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";



interface PageErrorProps {
	className?: string,
}

export const PageError:FC<PageErrorProps> = ({ children, className }) => {

    const { t } = useTranslation()

	return (
		<>
			<div
				className={classNames(cls.PageError, {}, [className])}
			>
				<p>{t('Произошла непредвиденная ошибка')}</p>
                <Button onClick={() => window.location.reload()}>
                    {t('Обновить страницу')}
                </Button>
			</div>
		</>
	)
}