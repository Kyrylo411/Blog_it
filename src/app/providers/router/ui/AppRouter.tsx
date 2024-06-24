import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouterProps, routeConfig } from 'shared/config/routerConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRouterProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">
					{route.element}
				</div>
			</Suspense>
		)

		return (
			<Route
				path={route.path}
				key={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	}, [])

	return (
		<Routes>
			{Object.values(routeConfig).map((renderWithWrapper))}
		</Routes>
	)
}

export default memo(AppRouter)
