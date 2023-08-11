import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from "../../../../../entities/User/index";
import {USER_LOCALSTORAGE_KEY} from "../../../../../shared/const/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";

export interface LoginByUserNameProps {
    username: string,
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string> >(
    'login/loginByUserName',
    async ({username, password}, {extra, dispatch, rejectWithValue}) => {
        try {
            const response = await extra.api.post<User>('/login', {
                username,
                password
            })
            if (!response.data){
                throw new Error('error')
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        }
        catch (e) {
            return rejectWithValue('error')
        }
    },
)