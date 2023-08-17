import {LoginSchema} from "features/AuthByUsername";
import {loginActions, loginReducer} from "./loginSlice";

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'test',
        }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test')))
            .toStrictEqual({ username: 'test'})
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'test',
        }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('test')))
            .toStrictEqual({ password: 'test'})
    })
})