import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RouterPath } from 'shared/config/routerConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/Home.svg'
import AboutUsIcon from 'shared/assets/icons/About-us.svg'
import Profile from 'shared/assets/icons/Profile.svg'
import Articles from 'shared/assets/icons/articles.svg'
import { SideBarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sideBarItemsList: SideBarItemType[] = [
			{
				path: RouterPath.main,
				Icon: HomeIcon,
				text: 'main page',
			},
			{
				path: RouterPath.about_us,
				Icon: AboutUsIcon,
				text: 'about us',
			},
		]
		if (userData) {
			sideBarItemsList.push(
				{
					path: RouterPath.profile + userData.id,
					Icon: Profile,
					text: 'profile page',
					authOnly: true,
				},
				{
					path: RouterPath.articles,
					Icon: Articles,
					text: 'articles',
					authOnly: true,
				},
			)
		}
		console.log('sideBarItemsList >>>>', sideBarItemsList)
		return sideBarItemsList
	}
)