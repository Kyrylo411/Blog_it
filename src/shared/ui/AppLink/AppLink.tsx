import { classNames } from 'shared/lib/classNames/classNames'
import { FC, ReactNode, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme
	children: ReactNode
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
	const {
		theme = AppLinkTheme.PRIMARY,
		className,
		children,
		to,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})
