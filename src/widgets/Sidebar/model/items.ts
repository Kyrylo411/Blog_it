import React from 'react'
import { RouterPath } from 'shared/config/routerConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/Home.svg'
import AboutUsIcon from 'shared/assets/icons/About-us.svg'
import Profile from 'shared/assets/icons/Profile.svg'

export interface SideBarItemType {
	path: string
	text: string
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
	authOnly?: boolean
}

export const SidebarItemsList: SideBarItemType[] = [
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
	{
		path: RouterPath.profile,
		Icon: Profile,
		text: 'profile page',
		authOnly: true
	},
]
