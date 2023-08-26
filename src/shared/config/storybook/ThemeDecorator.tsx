import {StoryFn} from '@storybook/react';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
	return (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent/>
			</div>
		</ThemeProvider>
	);
};
