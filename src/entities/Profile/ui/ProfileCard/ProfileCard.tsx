import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation()
	const profileData = useSelector(getProfileData)
	const isLoading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<Text title={t('my profile')} />
			<div className={cls.inputsWrapper}>
				<Input
					value={profileData?.firstName}
					className={cls.input}
					placeholder={t('first name')}
				/>
				<Input
					value={profileData?.lastName}
					className={cls.input}
					placeholder={t('last name')}
				/>
			</div>

			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.editBtn}
			>
				{t('edit profile')}
			</Button>
		</div>
	)
}
