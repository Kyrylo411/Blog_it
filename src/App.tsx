import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutUsAsync } from './pages/AboutUsPage/AboutUs.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import './styles/index.scss'
import { UseTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'



function App() {
	const { theme, toggleTheme } = UseTheme()
	return (
		<div className={classNames({ cls: 'app', additional: [theme], mods: {} })}>
			<button onClick={toggleTheme}>THEME</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About Us Page</Link>
			<Suspense fallback={<div>...Loading</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutUsAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App