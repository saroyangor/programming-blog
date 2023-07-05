import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/themeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};

export const Loading = Template.bind({});
Loading.args = {};
