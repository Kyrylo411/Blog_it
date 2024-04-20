import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from "app/providers/ThemeProvider";
import {AboutUsPage} from "pages/AboutUsPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";



function App() {
	const { theme } = useTheme()
	return (
		<div className={classNames('app',{},[theme])}>
			<Navbar/>
			<AppRouter/>
		</div>
	)
}

export default App