import { memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { useSelector } from 'react-redux'

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const sidebarItemsList = useSelector(getSidebarItems)
	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	const itemsList = useMemo(() => sidebarItemsList.map((item) => (
		<SidebarItem item={item} key={item.path} collapsed={collapsed} />
	)), [collapsed, sidebarItemsList])

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.itemsWrapper}>
				{itemsList}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	)
})
