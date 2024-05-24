import { classNames } from 'shared/lib/classNames/classNames';
import React, {
	ReactNode, lazy, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean
}

const ANIMATION_DELAY = 200;

export function Modal(props: ModalProps) {
	const {
		className, children, isOpen, onClose,
	} = props;
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};
	const handleClose = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onkeydown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleClose();
		}
	}, [handleClose]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onkeydown);
		}
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onkeydown);
		};
	}, [isOpen, onkeydown]);

	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={handleClose}>
					<div className={cls.content} onClick={handleContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
}
