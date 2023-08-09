import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args:{}
};
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];
export const Dark: Story = {
    args:{
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK) ];
