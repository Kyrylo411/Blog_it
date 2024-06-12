import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { CSSProperties, useMemo } from 'react'

interface AvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
}

export const Avatar = (props: AvatarProps) => {
	const { alt, className, size, src } = props

	const styles = useMemo<CSSProperties>(() => ({
		width: size || 100,
		height: size || 100,
	}), [size])

	return (
		<img
			src={src}
			className={classNames(cls.Avatar, {}, [className])}
			style={styles}
			alt={alt}
		/>
	)
}
