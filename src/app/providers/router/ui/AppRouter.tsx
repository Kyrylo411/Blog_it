import { getUserAuthData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = memo(() => {
	const isAuth = useSelector(getUserAuthData)

	const routes = useMemo(() => {
		return Object.values(routeConfig).filter(route => {
			if (route.authOnly && !isAuth) {
				return false
			}
			return true
		})
	}, [isAuth])

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ element, path }) => (
					<Route
						path={path}
						key={path}
						element={(
							<div className="page-wrapper">
								{element}
							</div>
						)}
					/>
				))}
			</Routes>
		</Suspense>
	)
})
