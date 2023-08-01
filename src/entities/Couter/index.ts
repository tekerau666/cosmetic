import type {CounterSchema} from "./modal/types/counterSchema";
import {counterReducer} from "./modal/slice/couterSlice";
import {Counter} from "./ui/Counter";
export {
    counterReducer,
    Counter,
    CounterSchema
}