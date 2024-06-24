import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from '../../assets/icons/copyIcon.svg'

interface CodeProps {
	className?: string
	text: string
}

export const Code = memo((props: CodeProps) => {
	const { className, text } = props

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text)
	}, [text])

	return (
		<div className={classNames(cls.CodeWrapper, {}, [className])}>
			<Button
				onClick={onCopy}
				className={cls.copyBtn}
				theme={ButtonTheme.CLEAR}
			>
				<CopyIcon className={cls.copyIcon} />
			</Button>
			<pre>
				<code className={cls.code}>
					{text}
				</code>
			</pre>
		</div>
	)
})
