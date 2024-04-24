import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }:LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const handleSwitch = () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={handleSwitch}
        >
            {t('language')}
        </Button>
    );
}
