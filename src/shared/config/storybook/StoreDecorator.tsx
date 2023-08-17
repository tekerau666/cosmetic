import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUsername/modal/slice/loginSlice";
import {profileReducer} from "entities/Profile";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
}
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultReducers, ...asyncReducers}}>
            <StoryComponent/>
        </StoreProvider>
    )
}
