import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args:{
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Dark: Story = {
    args:{
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
