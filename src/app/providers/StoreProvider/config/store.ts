import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {userReducer} from "../../../../entities/User/index";
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager";
import {$api} from "shared/api/api";
import {To} from "@remix-run/router";
import {NavigateOptions} from "react-router/dist/lib/context";
import {CombinedState, Reducer} from "redux";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer)

    const extraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']


