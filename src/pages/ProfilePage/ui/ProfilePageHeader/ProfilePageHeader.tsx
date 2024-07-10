import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
	getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
	className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile')
	const readonly = useSelector(getProfileReadOnly)
	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)
	const canEdit = authData?.id === profileData?.id
	const dispatch = useAppDispatch()

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadOnly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSaveChanges = useCallback(() => {
		dispatch(updateProfileData())
	}, [dispatch])

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Text title={t('my profile')} />
			{canEdit && (
				<>
					{readonly ? (
						<Button
							theme={ButtonTheme.BACKGROUND}
							className={cls.editBtn}
							onClick={onEdit}
						>
							{t('edit profile')}
						</Button>
					)
						: (
							<div className={cls.buttonsWrapper}>
								<Button
									theme={ButtonTheme.BACKGROUND}
									className={cls.editBtn}
									onClick={onSaveChanges}
								>
									{t('save')}
								</Button>
								<Button
									theme={ButtonTheme.BACKGROUND_RED}
									className={cls.editBtn}
									onClick={onCancelEdit}
								>
									{t('cancel')}
								</Button>
							</div>

						)}
				</>
			)}
		</div>
	)
}
