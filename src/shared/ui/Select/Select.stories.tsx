import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select',
  options: [
    { value: '1', content: 'First option' },
    { value: '2', content: 'Second option' },
    { value: '3', content: 'Third option' },
  ],
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  label: 'Select',
  options: [
    { value: '1', content: 'First option' },
    { value: '2', content: 'Second option' },
    { value: '3', content: 'Third option' },
  ],
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
