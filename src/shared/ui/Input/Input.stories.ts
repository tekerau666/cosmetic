import {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Input} from 'shared/ui/Input/Input';


const meta = {
	title: 'ui/Input',
	component: Input,
	parameters: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		placeholder: 'Text',
		value: '1123',
		children: 'Text'
	},
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];