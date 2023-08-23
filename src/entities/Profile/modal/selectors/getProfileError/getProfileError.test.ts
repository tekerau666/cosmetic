import {StateSchema} from "app/providers/StoreProvider";
import {getProfileError} from "./getProfileError";
import {Currency} from "../../../../../entities/Currency/";
import {Country} from "../../../../../entities/Country/index";
describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'ощибка'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('ощибка')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})