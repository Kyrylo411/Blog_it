import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('counter tests', () => {
	test('counter render correctly', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
	});

	test('counter increment correctly', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const incrementBtb = screen.getByTestId('increment-btn');
		userEvent.click(incrementBtb);
		expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
	});

	test('counter decrement correctly', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const decrementBtb = screen.getByTestId('decrement-btn');
		userEvent.click(decrementBtb);
		expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
	});
});
