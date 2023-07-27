import {StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

export const RouterDecorator = (story: () => StoryFn) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
)
