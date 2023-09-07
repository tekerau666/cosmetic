import { Comments } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<Comments>{
    isLoading?: boolean;
    error?: string;
}
