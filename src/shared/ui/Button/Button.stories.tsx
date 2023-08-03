import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonSize, ButtonTheme} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
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
        theme: ButtonTheme.CLEAR
    },
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)]
export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED
    },
};
ClearInverted.decorators = [ThemeDecorator(Theme.LIGHT)]


export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)]
export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
};
export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    },
};
OutlineSizeM.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};
OutlineSizeL.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};
OutlineSizeXL.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};
BackgroundTheme.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};
BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK)]

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true
    },
};
Square.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M
    },
};
SquareSizeM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    },
};
SquareSizeL.decorators = [ThemeDecorator(Theme.LIGHT)]


export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
SquareSizeXL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Disabled: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
Disabled.decorators = [ThemeDecorator(Theme.LIGHT)]


