import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe('getLoginPassword.test', () => {
    test('return password', () => {
        const state : DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Poul',
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('Poul')
    })
    test('should work with empty state', () => {
        const state : DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual("")
    })
})