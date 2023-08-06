import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator";


const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: {username: '123', password: '123'} })];