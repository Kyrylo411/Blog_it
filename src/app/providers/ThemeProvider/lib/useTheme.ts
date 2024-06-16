import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

interface UseThemeResult {
	theme: Theme
	toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		let newTheme: Theme
		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.PINKY
				break;
			case Theme.LIGHT:
				newTheme = Theme.DARK
				break;
			case Theme.PINKY:
				newTheme = Theme.LIGHT
				break;
			default:
				newTheme = Theme.LIGHT
		}
		setTheme?.(newTheme)
		document.body.className = newTheme
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	}
}
