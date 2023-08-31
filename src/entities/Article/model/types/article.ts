export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    CODE = 'CODE',
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string,
    title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export enum ArticleType {
    IT= 'IT',
    GAME = 'GAME',
    SCIENCE = 'SCIENCE',
    HISTORY = 'HISTORY',
    OTHER = 'OTHER'
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export interface Article {
    'id': string,
    'title': string,
    'subtitle': string,
    'img': string,
    'views': number,
    'createdAt': string,
    'type': ArticleType[],
    'blocks': ArticleBlock[],
}
