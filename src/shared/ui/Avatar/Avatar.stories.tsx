import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator} from "shared/config/storybook/RouterDecorator";
import {Avatar} from "shared/ui/Avatar/Avatar";


const meta = {
    title: 'shared/ui/Avatar',
    component: Avatar,
    parameters: {},
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        src: 'https://i.ytimg.com/vi/jDft8HRlZlI/maxresdefault.jpg',
        size: 200,
        alt: 'avatar',
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)]
};




