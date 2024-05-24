import { RouteProps } from 'react-router-dom';
import { AboutUsPage } from 'pages/AboutUsPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes{
    MAIN='main',
    ABOUT_US='about_us',
    NOT_FOUND='not_found'
}

export const RouterPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT_US]: '/about-us',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RouterPath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT_US]: {
		path: RouterPath.about_us,
		element: <AboutUsPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RouterPath.not_found,
		element: <NotFoundPage />,
	},
};
