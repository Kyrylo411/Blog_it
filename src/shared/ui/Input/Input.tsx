import { Mods, classNames } from 'shared/lib/classNames/classNames'
import React, {
	InputHTMLAttributes, memo, useEffect, useRef,
} from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
	type?: string
	placeholder?: string
	autofocus?: boolean
	readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		onChange,
		value,
		type = 'text',
		placeholder,
		autofocus,
		readOnly,
		...otherProps
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (autofocus) {
			inputRef.current?.focus()
		}
	}, [autofocus])

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods: Mods = {
		[cls.readonly]: readOnly,
		[cls.editing]: !readOnly
	}

	return (
		<div className={classNames(cls.inputWrapper, mods, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>
					{placeholder}
				</div>
			)}
			<input
				className={cls.input}
				type={type}
				value={value}
				onChange={onInputChange}
				ref={inputRef}
				readOnly={readOnly}
				{...otherProps}
			/>
		</div>
	)
})
