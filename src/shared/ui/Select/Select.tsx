import { Mods, classNames } from 'shared/lib/classNames/classNames'
import {
	ChangeEvent, memo, useCallback, useMemo,
} from 'react'
import cls from './Select.module.scss'

export interface SelectOptions {
	value: string
	content: string
}

interface SelectProps {
	className?: string
	label?: string
	readOnly?: boolean
	options?: SelectOptions[]
	value?: string
	onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
	const {
		className, label, readOnly, options, onChange, value,
	} = props

	const optionsList = useMemo(() => options?.map((option) => (
		<option
			key={option.value}
			value={option.value}
		>
			{option.content}
		</option>
	)), [options])

	const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value)
	}, [onChange])

	const mods: Mods = {
		[cls.readonly]: readOnly,
		[cls.editing]: !readOnly,
	}

	return (
		<div className={classNames(cls.Wrapper, mods, [className])}>
			{label && <span>{label}</span>}
			<select
				disabled={readOnly}
				className={cls.select}
				value={value}
				onChange={onChangeHandler}
			>
				{optionsList}
			</select>
		</div>
	)
})
