import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutUsPage() {
    const { t } = useTranslation('about');
    return (
        <div>
            <h1>
                {t('about us')}
            </h1>
        </div>
    );
}

export default AboutUsPage;
