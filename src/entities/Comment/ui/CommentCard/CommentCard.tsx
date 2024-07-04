import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { Comment } from 'entities/Comment/model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
	className?: string
	comment: Comment
	isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
	const { className, comment, isLoading } = props
	const { username, avatar } = comment.user

	if (isLoading) {
		return (
			<div
				className={classNames(cls.CommentCard, {}, [className])}
			>
				<div className={cls.header}>
					<Skeleton border="50%" height={30} width={30} />
					<Skeleton height={30} width={150} />
				</div>
				<Skeleton className={cls.text} height={100} width='100%' />
			</div>
		)
	}

	return (
		<div
			className={classNames(cls.CommentCard, {}, [className])}
		>
			<div className={cls.header}>
				{avatar ? <Avatar alt='avatar' size={30} src={avatar} /> : null}
				<Text title={username} theme={TextTheme.INVERTED} />
			</div>
			<Text className={cls.text} text={comment.text} />

		</div>
	)
})
