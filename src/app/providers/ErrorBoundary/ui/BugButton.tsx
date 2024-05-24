import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// delete; component for error testing
export function BugButton() {
	const [error, setError] = useState(false);
	const { t } = useTranslation();
	const trowError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<Button
			onClick={trowError}
			size={ButtonSize.M}
		>
			{t('throw error')}
		</Button>
	);
}
