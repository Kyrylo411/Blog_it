import { classNames } from 'shared/lib/classNames/classNames';
import React, {
	InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	type?: string
	placeholder?: string
	autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		onChange,
		value,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props;

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (autofocus) {
			inputRef.current?.focus();
		}
	}, [autofocus]);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls.inputWrapper, {}, [className])}>
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
				{...otherProps}
			/>
		</div>
	);
});
