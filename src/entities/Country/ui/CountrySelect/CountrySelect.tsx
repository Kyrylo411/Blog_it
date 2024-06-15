import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Countries } from '../../model/types/country'

interface CountrySelectProps {
	className?: string
	readOnly?: boolean
	value?: string
	onChange?: (value: Countries) => void
}

const options = [
	{ value: Countries.France, content: Countries.France },
	{ value: Countries.Germany, content: Countries.Germany },
	{ value: Countries.Moldova, content: Countries.Moldova },
	{ value: Countries.Poland, content: Countries.Poland },
	{ value: Countries.Ukraine, content: Countries.Ukraine },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
	const {
		className, readOnly, onChange, value,
	} = props
	const { t } = useTranslation('profile')

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Countries)
	}, [onChange])

	return (
		<Select
			label={t('choose country')}
			readOnly={readOnly}
			options={options}
			className={classNames('', {}, [className])}
			value={value}
			onChange={onChangeHandler}
		/>
	)
})
