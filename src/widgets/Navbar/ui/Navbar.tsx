import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }:NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.linksWrapper)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {t('main page')}
                </AppLink>
                <AppLink to="/about-us" theme={AppLinkTheme.SECONDARY}>{t('about us')}</AppLink>
            </div>
        </div>
    );
}
