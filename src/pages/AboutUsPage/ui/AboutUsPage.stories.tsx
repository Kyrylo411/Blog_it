import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AboutUsPage
    from "pages/AboutUsPage/ui/AboutUsPage";

export default {
    title: 'pages/AboutUs',
    component: AboutUsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutUsPage>;

const Template: ComponentStory<typeof AboutUsPage> = (args:{}) => <AboutUsPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)]

