import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPage {
    className?: string,
}

const ArticlesPage: FC<ArticlesPage> = ({ className }) => {
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ArticlesPage
        </div>
    );
};

export default memo(ArticlesPage);
