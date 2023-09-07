import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

export const getArticleDetailsCommentsError = (state: ArticleDetailsCommentsSchema) => state?.error;
export const getArticleDetailsCommentsIsLoading = (state: ArticleDetailsCommentsSchema) => state?.isLoading;
