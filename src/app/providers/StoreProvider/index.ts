import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider";
import {createReduxStore, AppDispatch} from "./config/store";
import type {StateSchema, ReduxStoreWithManager, ThunkExtraArg} from "./config/StateSchema";
export {
    StoreProvider,
    StateSchema,
    createReduxStore,
    AppDispatch,
    ReduxStoreWithManager,
    ThunkExtraArg,
};