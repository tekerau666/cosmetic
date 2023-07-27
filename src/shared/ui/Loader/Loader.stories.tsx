import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Loader} from "shared/ui/Loader/Loader";

const meta = {
    title: 'shared/ui/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args:{
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Dark: Story = {
    args:{
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
