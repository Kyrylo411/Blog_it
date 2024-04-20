import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export function Navbar  ({className}:NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <ThemeSwitcher/>
            <div className={classNames(cls.linksWrapper)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main Page</AppLink>
                <AppLink to={'/about-us'} theme={AppLinkTheme.SECONDARY}>About Us Page</AppLink>
            </div>
        </div>
    );
}

