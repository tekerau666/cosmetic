import {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {NotFoundPage} from './NotFoundPage';

const meta = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	parameters: {},
	tags: ['autodocs'],
} satisfies Meta<typeof NotFoundPage>;
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
