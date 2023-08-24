import {StateSchema} from "app/providers/StoreProvider";
import {getProfileData} from "./getProfileData";
import {Currency} from "../../../../../entities/Currency/";
import {Country} from "../../../../../entities/Country/index";
describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            firstName: "Pavel23",
            lastName: "Vocnel",
            age: 90,
            currency: Currency.RUB,
            country: Country.Serbia,
            city: "Moscow",
            username: "admin",
            avatar: "https://balakovo24.ru/b24/uploads/2021/09/владислав-поздняков.jpg"
        }
        const state: DeepPartial<StateSchema> = {
           profile: {
               data: data
           }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})