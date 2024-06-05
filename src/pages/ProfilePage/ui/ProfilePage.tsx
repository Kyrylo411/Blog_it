import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profilePage')
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<h1>
					{t('profile page')}
				</h1>
			</div>
		</DynamicModuleLoader>

	)
}

export default memo(ProfilePage)