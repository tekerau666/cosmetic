import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile} from "../../types/profile";
import axios from "axios";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi;
        try {
            const response = await extra.api.get<Profile>('/profile')
            console.log(response.data)
            return response.data
        }
        catch (e) {
            return rejectWithValue('error')
        }
    },
)