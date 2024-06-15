import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Countries, CountrySelect } from 'entities/Country'
import { Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
	className?: string
	data?: Profile
	isLoading?: boolean
	error?: string
	onFirstNameChange?: (value?: string) => void
	onLastNameChange?: (value?: string) => void
	onAgeChange?: (value?: string) => void
	onCityChange?: (value?: string) => void
	onAvatarChange?: (value?: string) => void
	onUsernameChange?: (value?: string) => void
	onCurrencyChange?: (currency: Currency) => void
	onCountryChange?: (country: Countries) => void
	readOnly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		onFirstNameChange,
		onLastNameChange,
		onAgeChange,
		onCityChange,
		onAvatarChange,
		onUsernameChange,
		onCurrencyChange,
		onCountryChange,
		readOnly,
	} = props
	const { t } = useTranslation('profile')

	const mods: Mods = {
		[cls.editing]: !readOnly,
	}

	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('profile error')}
					text={t('try to reload page')}
					align={TextAlign.CENTER}
				/>
			</div>
		)
	}

	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			{data?.avatar
				&& (
					<div className={cls.avatarWrapper}>
						<Avatar size={300} src={data?.avatar} alt={t('profile avatar')} />
					</div>
				)}
			<div className={cls.inputsWrapper}>
				<Input
					value={data?.firstName}
					className={cls.input}
					placeholder={t('first name')}
					onChange={onFirstNameChange}
					readOnly={readOnly}
				/>
				<Input
					value={data?.lastName}
					className={cls.input}
					placeholder={t('last name')}
					onChange={onLastNameChange}
					readOnly={readOnly}
				/>
				<Input
					value={data?.age}
					className={cls.input}
					placeholder={t('age')}
					onChange={onAgeChange}
					readOnly={readOnly}
					type="number"
				/>
				<Input
					value={data?.city}
					className={cls.input}
					placeholder={t('city')}
					onChange={onCityChange}
					readOnly={readOnly}
				/>
				<Input
					value={data?.username}
					className={cls.input}
					placeholder={t('username')}
					onChange={onUsernameChange}
					readOnly={readOnly}
				/>
				<Input
					value={data?.avatar}
					className={cls.input}
					placeholder={t('avatar link')}
					onChange={onAvatarChange}
					readOnly={readOnly}
				/>
				<CurrencySelect
					readOnly={readOnly}
					value={data?.currency}
					onChange={onCurrencyChange}
				/>
				<CountrySelect
					readOnly={readOnly}
					value={data?.country}
					onChange={onCountryChange}
				/>
			</div>
		</div>
	)
}
