import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponent {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponent> = ({ className, block }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text title={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
};
