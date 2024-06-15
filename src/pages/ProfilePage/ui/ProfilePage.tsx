import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useMemo } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
	ProfileCard,
	fetchProfileData,
	getProfileError,
	getProfileFormData,
	getProfileLoading,
	getProfileReadOnly,
	getProfileValidateErrors,
	profileActions,
	profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Currency } from 'entities/Currency'
import { Countries } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
	profile: profileReducer,
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile')
	const formData = useSelector(getProfileFormData)
	const isLoading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)
	const readOnly = useSelector(getProfileReadOnly)
	const validateErrors = useSelector(getProfileValidateErrors)

	const dispatch = useAppDispatch()

	const validateErrorsTranslations = useMemo(() => ({
		[ValidateProfileError.INCORRECT_AGE]: t('incorrect age'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect country'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect user data'),
		[ValidateProfileError.NO_DATA]: t('no user info'),
		[ValidateProfileError.SERVER_ERROR]: t('server error'),
	}), [t])

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchProfileData())
		}
	}, [dispatch])

	const onFirstNameChange = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ firstName: value || '' }))
	}, [dispatch])

	const onLastNameChange = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ lastName: value || '' }))
	}, [dispatch])

	const onAgeChange = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ age: Number(value || 0) }))
	}, [dispatch])

	const onCityChange = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ city: value || '' }))
	}, [dispatch])

	const onUsernameChange = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ username: value || '' }))
	}, [dispatch])

	const onAvatarChange = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ avatar: value || '' }))
	}, [dispatch])

	const onCurrencyChange = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfileData({ currency }))
	}, [dispatch])

	const onCountryChange = useCallback((country: Countries) => {
		dispatch(profileActions.updateProfileData({ country }))
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length && validateErrors.map((error) => (
					<Text text={validateErrorsTranslations[error]} theme={TextTheme.ERROR} key={error} />
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					onFirstNameChange={onFirstNameChange}
					onLastNameChange={onLastNameChange}
					onAgeChange={onAgeChange}
					onCityChange={onCityChange}
					onUsernameChange={onUsernameChange}
					onAvatarChange={onAvatarChange}
					onCurrencyChange={onCurrencyChange}
					onCountryChange={onCountryChange}
					readOnly={readOnly}
				/>
			</div>
		</DynamicModuleLoader>

	)
}

export default ProfilePage
