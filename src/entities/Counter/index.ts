import { CounterSchema } from './model/types/countrSchema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/counterSlice';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
