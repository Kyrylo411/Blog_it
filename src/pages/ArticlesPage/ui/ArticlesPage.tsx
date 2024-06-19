import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const { t } = useTranslation('article')
	return <div className={classNames('', {}, [className])}>
		<h1>{t('articles')}</h1>
	</div>
}

export default memo(ArticlesPage)