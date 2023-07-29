import type {Meta, StoryObj} from '@storybook/react';
import {AppLink, AppLinkTheme} from './AppLink';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";


const meta = {
    title: 'shared/ui/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        to: '/',
        children: 'Text',
    },
} satisfies Meta<typeof AppLink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)]
};
export const Secondary: Story = {
    args:{
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)]

};
export const PrimaryDark: Story = {
    args:{
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)]

};
export const SecondaryDark: Story = {
    args:{
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [RouterDecorator,ThemeDecorator(Theme.DARK)]
};




