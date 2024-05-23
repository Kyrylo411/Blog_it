import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function Main() {
	const { t } = useTranslation('mainPage');
	const [value, setValue] = useState('')
	const handleChange = (val: string) => {
		setValue(val)
	}
	return (
		<div>
			<h1>
				{t('main page')}
			</h1>
		</div>
	);
}

export default Main;
