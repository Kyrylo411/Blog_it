export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT'
}

export interface ArticleBlockBase {
	id: string
	type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
	title?: string
	paragraphs: Array<string>
	type: ArticleBlockType.TEXT
}

export interface ArticleImageBlock extends ArticleBlockBase {
	title: string
	src: string
	type: ArticleBlockType.IMAGE
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	code: string
	type: ArticleBlockType.CODE
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	MEDICINE = 'MEDICINE'
}

export interface Article {
	id: string
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: Array<ArticleType>
	blocks: Array<ArticleBlock>
}
