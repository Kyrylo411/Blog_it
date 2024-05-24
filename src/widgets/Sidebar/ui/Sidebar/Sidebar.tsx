import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routerConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/Home.svg';
import AboutUsIcon from 'shared/assets/icons/About-us.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }:SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation(['about', 'mainPage']);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.itemsWrapper}>
				<AppLink
					className={cls.linkItem}
					theme={AppLinkTheme.SECONDARY}
					to={RouterPath.main}
				>
					<HomeIcon className={cls.icon} />
					<span className={cls.link}>
						{t('main page', { ns: 'mainPage' })}
					</span>
				</AppLink>
				<AppLink
					className={cls.linkItem}
					to={RouterPath.about_us}
					theme={AppLinkTheme.SECONDARY}
				>
					<AboutUsIcon className={cls.icon} />
					<span className={cls.link}>
						{t('about us', { ns: 'about' })}
					</span>
				</AppLink>

			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	);
}
