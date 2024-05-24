import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const StyleDecorator = (theme:Theme) => (story: ()=> Story) => (
	<div className={`app ${theme}`}>{story()}</div>
);
