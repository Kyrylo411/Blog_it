import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article')
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return (
			<div>
				{t('no such article')}
			</div>
		)
	}

	return (
		<div className={classNames('', {}, [className])}>
			<h1>{t('articles details')}</h1>
			<ArticleDetails id={id} />
		</div>
	)
}

export default memo(ArticleDetailsPage)
