import {counterReducer, counterActions} from "./couterSlice";
import {CounterSchema} from "entities/Couter";

describe('counterSlice.test', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 })
    })
    test('', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 })
    })
    test('', () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 })
    })
})