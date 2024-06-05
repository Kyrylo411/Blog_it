import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async'

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
			<LoginForm onSuccess={onClose} />
		</Suspense>
	</Modal>
)
