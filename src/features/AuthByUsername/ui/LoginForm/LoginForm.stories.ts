import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {LoginForm} from "./LoginForm";


const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]