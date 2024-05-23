import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
	className?: string;
}

export function Navbar({ className }: NavbarProps) {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const { t } = useTranslation();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);


	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Log-in')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

			<div className={classNames(cls.linksWrapper)} />
		</div>
	);
}
