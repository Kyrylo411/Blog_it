import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export function PageError({ className }:PageErrorProps) {
    const { t } = useTranslation();
    const reload = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Something went wrong')}</h1>
            <div>
                <Button className={cls.button} onClick={reload}>{t('reload page')}</Button>
            </div>
        </div>
    );
}
