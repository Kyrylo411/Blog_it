import { memo } from 'react'
import { useTranslation } from 'react-i18next'

function AboutUsPage() {
	const { t } = useTranslation()
	return (
		<div>
			<h1>
				{t('about us')}
			</h1>
		</div>
	)
}

export default memo(AboutUsPage)
