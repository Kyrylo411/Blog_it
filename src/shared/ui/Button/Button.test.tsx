import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('button tests', () => {
	test('render button text', () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});

	test('get correct className', () => {
		render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
		expect(screen.getByText('Test')).toHaveClass('clear');
		screen.debug();
	});
});
