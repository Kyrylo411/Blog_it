import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export function LangSwitcher({ className, short }:LangSwitcherProps) {
	const { t, i18n } = useTranslation()

	const handleSwitch = () => {
		i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk')
	}

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={handleSwitch}
		>
			{t(short ? 'short lang' : 'language')}
		</Button>
	)
}
