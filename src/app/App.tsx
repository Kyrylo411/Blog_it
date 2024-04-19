import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from "app/providers/ThemeProvider";
import {AboutUsPage} from "pages/AboutUsPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";



function App() {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames({ cls: 'app', additional: [theme], mods: {} })}>
			<button onClick={toggleTheme}>THEME</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about-us'}>About Us Page</Link>
			<AppRouter/>
		</div>
	)
}

export default App