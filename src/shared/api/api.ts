import axios from "axios";
import {LOCAL_STORAGE_THEME_KEY} from "app/providers/ThemeProvider/lib/ThemeContext";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

export const $api = axios.create({
    baseURL: 'http://localhost:1448',
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    }
})