import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: '100%',
    height: 200,
};
export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
export const DefaultDark = Template.bind({});
DefaultDark.args = {
    width: '100%',
    height: 200,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]

