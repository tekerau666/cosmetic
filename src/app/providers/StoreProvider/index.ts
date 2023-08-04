import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import type {StateSchema, ReduxStoreWithManager} from "./config/StateSchema";
export {
    StoreProvider,
    StateSchema,
    createReduxStore,
    ReduxStoreWithManager,
};