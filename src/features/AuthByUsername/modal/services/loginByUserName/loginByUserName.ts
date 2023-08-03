import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from "../../../../../entities/User/index";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface LoginByUserNameProps {
    username: string,
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps>(
    'login/loginByUserName',
    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:1448/login', {
                username,
                password
            })
            if (!response.data){
                throw new Error('error')
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    },
)