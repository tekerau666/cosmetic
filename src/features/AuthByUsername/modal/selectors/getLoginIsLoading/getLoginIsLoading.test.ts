import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe('getLoginIsLoading.test', () => {
    test('return isLoading is true', () => {
        const state : DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('return isLoading is false', () => {
        const state : DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})