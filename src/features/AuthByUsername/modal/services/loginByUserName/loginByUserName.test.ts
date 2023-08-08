import axios from "axios";
import {loginByUserName} from "./loginByUserName";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {userActions} from "../../../../../entities/User";

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName.test', () => {
    let dispatch: Dispatch;
    let action: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn()
        action = jest.fn()
    })
    test('', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data: {username: 'test', id: '1'} }));
        const action = loginByUserName({username: 'test', password: 'test'});
        const result = await action(dispatch, action, undefined);
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData({username: 'test', id: '1'}));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    })
})