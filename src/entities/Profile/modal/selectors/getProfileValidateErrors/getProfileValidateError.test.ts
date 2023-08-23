import {StateSchema} from "app/providers/StoreProvider";
import {getProfileValidateError} from "./getProfileValidateError";
import {ValidateProfileError} from "../../../../../entities/Profile";

describe('getProfileValidateError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_CITY,
                    ValidateProfileError.INCORRECT_USER_DATA
                ]
            }
        }
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_CITY, ValidateProfileError.INCORRECT_USER_DATA])
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined)
    })
})