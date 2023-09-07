import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { CommentItem } from 'entities/Comment/ui/CommentItem/CommentItem';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comments } from 'entities/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comment: Comments[]
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comment?.length
                ? comment.map((item) => (
                    <CommentItem key={item.id} comment={item} className={cls.comment} isLoading={isLoading} />
                ))
                : <Text title={t('Комментарий не найден')} />}
        </div>
    );
});
