import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./LoginForm.module.scss";
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, isLoading, password, error } = useSelector(getLoginState)


	const onUsernameChange = useCallback(
		(value: string) => {
			dispatch(loginActions.setUserName(value));
		},
		[dispatch]
	);

	const onPasswordChange = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(
		() => {
			dispatch(loginByUsername({ username, password }))
		},
		[dispatch, username, password]
	);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('authorization form')} />
			{error && <Text theme={TextTheme.ERROR} text={t('incorrect login or password')} />}
			<div className={cls.inputs}>
				<Input
					type="text"
					placeholder={t("enter name")}
					autofocus
					onChange={onUsernameChange}
					value={username}
				/>
				<Input
					className={cls.input}
					type="text"
					placeholder={t("enter password")}
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
				{t("enter")}
			</Button>
		</div>
	);
});
