import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

function Main() {
    const { t } = useTranslation('mainPage');
    return (
        <div>
            <h1>
                {t('main page')}
                <BugButton />
            </h1>
        </div>
    );
}

export default Main;
