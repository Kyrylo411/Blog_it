import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/articleDetails'
import {
	Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eyeIcon.svg'
import CalendarIcon from 'shared/assets/icons/calendarIcon.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticleDetailsProps {
	className?: string
	id: string
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
}

const renderBlock = (block: ArticleBlock) => {
	switch (block.type) {
		case ArticleBlockType.CODE:
			return (
				<ArticleCodeBlockComponent
					className={cls.articleBlock}
					key={block.id}
					block={block}
				/>
			)

		case ArticleBlockType.IMAGE:
			return (
				<ArticleImageBlockComponent
					className={cls.articleBlock}
					key={block.id}
					block={block}
				/>
			)

		case ArticleBlockType.TEXT:
			return (
				<ArticleTextBlockComponent
					className={cls.articleBlock}
					key={block.id}
					block={block}
				/>
			)

		default:
			return null
	}
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	const article = useSelector(getArticleDetailsData)
	const isLoading = useSelector(getArticleDetailsIsLoading)
	const error = useSelector(getArticleDetailsError)

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id))
		}
	}, [dispatch, id])

	useInitialEffect(() => {
		dispatch(fetchArticleById(id))
	})

	let content

	if (isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border="50%" />
				<Skeleton className={cls.title} width={600} height={100} />
				<Skeleton className={cls.skeleton} width="100%" height={320} />
				<Skeleton className={cls.skeleton} width={400} height={120} />
				<Skeleton className={cls.skeleton} width="100%" height={320} />
			</>
		)
	} else if (error) {
		content = (
			<Text title={`${t('no such article')}...`} align={TextAlign.CENTER} theme={TextTheme.ERROR} />
		)
	} else {
		content = (
			<>
				<div className={cls.avatarWrapper}>
					<Avatar
						size={200}
						src={article?.img}
						className={cls.avatar}
					/>
				</div>
				<Text
					align={TextAlign.LEFT}
					title={article?.title}
					text={article?.subtitle}
					className={cls.title}
					size={TextSize.L}
				/>
				<div className={cls.articleInfo}>
					<Icon Svg={EyeIcon} />
					<Text
						text={String(article?.views)}
					/>
				</div>
				<div className={cls.articleInfo}>
					<Icon Svg={CalendarIcon} />
					<Text
						text={String(article?.createdAt)}
					/>
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.Article, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	)
})
