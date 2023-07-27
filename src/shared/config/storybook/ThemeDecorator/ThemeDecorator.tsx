import {StoryFn} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
}
