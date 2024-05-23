import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
	className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation()
	return <div className={classNames(cls.LoginForm, {}, [className])}>
		<div className={cls.inputs}>
			<Input
				type="text"
				placeholder={t('enter name')}
				autofocus
			/>
			<Input
				className={cls.input}
				type="text"
				placeholder={t('enter password')}
			/>
		</div>
		<Button className={cls.loginBtn}>{t('enter')}</Button>
	</div>
}
