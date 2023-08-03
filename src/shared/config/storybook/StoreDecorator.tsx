import {StoryFn} from "@storybook/react";
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent/>
        </StoreProvider>
    )
}
