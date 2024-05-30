import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
	isOpen: boolean
	onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
	<Modal
		lazy
		isOpen={isOpen}
		onClose={onClose}
	>
		<Suspense fallback={<Loader />}>
			<LoginForm />
		</Suspense>
	</Modal>
);
