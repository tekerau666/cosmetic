import {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Modal} from 'shared/ui/Modal/Modal';

const meta = {
	title: 'ui/Modal',
	component: Modal,
	parameters: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Text'
	},
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];