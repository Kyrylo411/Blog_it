import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue', () => {
    test('should return correct counter value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
