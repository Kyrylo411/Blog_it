import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const username = useSelector(getLoginUserName)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginLoading)
	const error = useSelector(getLoginError)

	const onUsernameChange = useCallback((value: string) => {
		dispatch(loginActions.setUserName(value))
	}, [dispatch])

	const onPasswordChange = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }))
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [onSuccess, dispatch, username, password])

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={t('authorization form')} />
				{error && <Text theme={TextTheme.ERROR} text={t('incorrect login or password')} />}
				<div className={cls.inputs}>
					<Input
						type="text"
						placeholder={t('enter name')}
						autofocus
						onChange={onUsernameChange}
						value={username}
					/>
					<Input
						className={cls.input}
						type="text"
						placeholder={t('enter password')}
						onChange={onPasswordChange}
						value={password}
					/>
				</div>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.loginBtn}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('enter')}
				</Button>
			</div>
		</DynamicModuleLoader>
	)
})

export default LoginForm
