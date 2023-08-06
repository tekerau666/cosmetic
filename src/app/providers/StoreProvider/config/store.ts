import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {userReducer} from "../../../../entities/User/index";
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

