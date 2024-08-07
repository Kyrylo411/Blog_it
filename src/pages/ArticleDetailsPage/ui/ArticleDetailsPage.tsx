import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/AddNewComment'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()

	const comments = useSelector(getArticleComments.selectAll)
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
	const dispatch = useAppDispatch()

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text))
	}, [dispatch])

	if (!id) {
		return (
			<div>
				{t('no such article')}
			</div>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<h1>{t('articles details')}</h1>
				<ArticleDetails id={id} />
				<Text title={t('comments')} className={cls.commentsTitle} />
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList isLoading={commentsIsLoading} comments={comments} />
			</div>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)
