import type {Meta, StoryObj} from '@storybook/react';
import {Button, ThemeButton} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)]
export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]


