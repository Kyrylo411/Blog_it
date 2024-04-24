import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    theme = AppLinkTheme.PRIMARY, className, children, to, ...otherProps
}) => (
    <Link to={to} className={classNames(cls.AppLink, { theme }, [cls[theme]])} {...otherProps}>
        {children}
    </Link>
);
