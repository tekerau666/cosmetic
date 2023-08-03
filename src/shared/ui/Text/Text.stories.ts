import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Text, TextTheme} from './Text'

const meta = {
    title: 'ui/Text',
    component: Text,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Тутле',
        text: 'Тукст',
    },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)]
export const Error: Story = {
    args: {
        title: 'Тутле',
        text: 'Тукст',
        theme: TextTheme.ERROR
    },
};
Error.decorators = [ThemeDecorator(Theme.LIGHT)]
export const onlyText: Story = {
    args: {
        text: 'Тукст',
    },
};
onlyText.decorators = [ThemeDecorator(Theme.LIGHT)]
export const onlyTitle: Story = {
    args: {
        title: 'Тутле',
    },
};
onlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)]

export const PrimaryDark: Story = {
    args: {
        title: 'Lorem ipsima',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.LIGHT)]

export const onlyTextDark: Story = {
    args: {
        text: 'Тукст',
    },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTitleDark: Story = {
    args: {
        title: 'Тутле',
    },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]