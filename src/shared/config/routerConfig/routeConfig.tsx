import { RouteProps } from 'react-router-dom'
import { AboutUsPage } from 'pages/AboutUsPage'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'

export type AppRouterProps = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT_US = 'about_us',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details',

	// last rout
	NOT_FOUND = 'not_found'
}

export const RouterPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT_US]: '/about-us',
	[AppRoutes.PROFILE]: '/profile/', // +:id
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/', // +:id
	[AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
	[AppRoutes.MAIN]: {
		path: RouterPath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT_US]: {
		path: RouterPath.about_us,
		element: <AboutUsPage />,
	},
	[AppRoutes.PROFILE]: {
		path: `${RouterPath.profile}:id`,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: RouterPath.articles,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RouterPath.article_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RouterPath.not_found,
		element: <NotFoundPage />,
	},
}
