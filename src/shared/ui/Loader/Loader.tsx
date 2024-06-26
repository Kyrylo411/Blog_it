import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string;
}

export function Loader({ className }:LoaderProps) {
	return (
		<div className={classNames('lds-default', {}, [className])}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	)
}
