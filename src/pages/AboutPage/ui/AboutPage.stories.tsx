import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;
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
