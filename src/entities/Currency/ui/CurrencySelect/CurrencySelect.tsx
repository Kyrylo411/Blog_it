import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
	className?: string
	readOnly?: boolean
	value?: string
	onChange?: (value: Currency) => void
}

const options = [
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.UAH, content: Currency.UAH },
	{ value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const {
		className, readOnly, onChange, value,
	} = props
	const { t } = useTranslation('profile')

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency)
	}, [onChange])

	return (
		<Select
			label={t('choose currency')}
			readOnly={readOnly}
			options={options}
			className={classNames('', {}, [className])}
			value={value}
			onChange={onChangeHandler}
		/>
	)
})
