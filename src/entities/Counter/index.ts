import { CounterSchema } from './model/types/countrSchema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/CounterSlice';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
