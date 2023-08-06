import {StoryFn} from "@storybook/react";
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUsername/modal/slice/loginSlice";

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers: ReducersMapObject<StateSchema>
) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultReducers, ...asyncReducers}}>
            <StoryComponent/>
        </StoreProvider>
    )
}
