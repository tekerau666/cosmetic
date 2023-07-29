import type {Meta, StoryObj} from '@storybook/react';
import {Sidebar, } from './Sidebar';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator]
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), RouterDecorator]
};

