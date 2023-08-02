import {CounterSchema} from "entities/Couter/modal/types/counterSchema";
import {UserSchema} from "entities/User";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema
}