import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
	test('decrement', () => {
		const state: DeepPartial<CounterSchema> = {
			value: 10,
		};
		expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
	});

	test('increment', () => {
		const state: DeepPartial<CounterSchema> = {
			value: 10,
		};
		expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
	});

	test('should return value with empty state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});
});
