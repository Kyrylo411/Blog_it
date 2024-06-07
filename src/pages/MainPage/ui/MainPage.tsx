import { memo } from 'react'
import { useTranslation } from 'react-i18next'

function Main() {
	const { t } = useTranslation()
	return (
		<div>
			<h1>
				{t('main page')}
			</h1>
		</div>
	)
}

export default memo(Main)
