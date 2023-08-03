import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {userReducer} from "../../../../entities/User/index";
import {loginReducer} from "features/AuthByUsername/modal/slice/loginSlice";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

