import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from "../types/loginSchema";
import {loginByUserName} from "features/AuthByUsername/modal/services/loginByUserName/loginByUserName";

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false
                // @ts-ignore
                state.error = action.payload
            })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

