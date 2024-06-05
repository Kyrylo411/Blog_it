import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SideBarItemType } from 'widgets/Sidebar/model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
	item: SideBarItemType
	collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation()
	const {
		Icon, path, text, translation,
	} = item

	return (
		<AppLink
			className={classNames(cls.linkItem, { [cls.collapsed]: collapsed })}
			to={path}
			theme={AppLinkTheme.SECONDARY}
		>
			<Icon className={cls.icon} />
			<span className={cls.link}>
				{t(text, { ns: translation })}
			</span>
		</AppLink>
	)
})
