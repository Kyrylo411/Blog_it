import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string;
}

export function Navbar({ className }: NavbarProps) {
	const [isAuthModal, setIsAuthModal] = useState(false)
	const { t } = useTranslation()
	const user = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	if (user) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					className={cls.links}
					onClick={onLogout}
				>
					{t('log-out')}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

				<div className={classNames(cls.linksWrapper)} />
			</div>
		)
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Log-in')}
			</Button>
			{
				isAuthModal && (
					<LoginModal
						isOpen={isAuthModal}
						onClose={onCloseModal}
					/>
				)
			}

			<div className={classNames(cls.linksWrapper)} />
		</div>
	)
}
