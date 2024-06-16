import { Mods, classNames } from 'shared/lib/classNames/classNames'
import {
	ButtonHTMLAttributes, ReactNode, memo,
} from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
	'CLEAR' = 'clear',
	'CLEAR_INVERTED' = 'clear_inverted',
	'OUTLINE' = 'outline',
	'OUTLINE_RED' = 'outline_red',
	'BACKGROUND' = 'background',
	'BACKGROUND_INVERTED' = 'background_inverted',
	'BACKGROUND_RED' = 'background_red'
}

export enum ButtonSize {
	'M' = 'size_m',
	'L' = 'size_l',
	'XL' = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
	children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
	const {
		square,
		size = ButtonSize.M,
		theme = ButtonTheme.OUTLINE,
		className,
		children,
		disabled,
		...otherProps
	} = props
	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	}

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})
