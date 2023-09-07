import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/acticleDetailsCommentsSlice';
import {
    fetchCommentsByArticleId,
} from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPage {
    className?: string,
}

// eslint-disable-next-line no-redeclare
const ArticleDetailsPage: FC<ArticleDetailsPage> = ({ className }) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статьи не найдены')}
            </div>
        );
    }

    const reducers: ReducersList = {
        articleDetailsComments: articleDetailsCommentsReducer,
    };
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList isLoading={commentsIsLoading} comment={comments} />
            </div>
        </DynamicModuleLoader>

    );
};
export default memo(ArticleDetailsPage);
