import { Route, RouteProps } from 'react-router-dom';
import { AboutUsPage } from 'pages/AboutUsPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes{
    MAIN='main',
    ABOUT_US='about-us'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT_US]: '/about-us',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT_US]: {
        path: RouterPath['about-us'],
        element: <AboutUsPage />,
    },
};
