import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Comment } from 'entities/Comment/model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RouterPath } from 'shared/config/routerConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
	className?: string
	comment?: Comment
	isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
	const { className, comment, isLoading } = props
	const { t } = useTranslation('profile')

	if (isLoading) {
		return (
			<div
				className={classNames(cls.CommentCard, {}, [className, cls.loading])}
			>
				<div className={cls.header}>
					<Skeleton border="50%" height={30} width={30} />
					<Skeleton height={30} width={150} />
				</div>
				<Skeleton className={cls.text} height={100} width="100%" />
			</div>
		)
	}

	if (!comment) {
		return null
	}

	return (
		<div
			className={classNames(cls.CommentCard, {}, [className])}
		>
			<AppLink to={`${RouterPath.profile}${comment?.user.id}`} className={cls.header}>
				{
					comment?.user.avatar
						? <Avatar alt={t('profile avatar')} size={30} src={comment?.user.avatar} />
						: null
				}
				<Text title={comment?.user.username} theme={TextTheme.INVERTED} />
			</AppLink>
			<Text className={cls.text} text={comment?.text} />

		</div>
	)
})
