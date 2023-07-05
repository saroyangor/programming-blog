import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/themeProvider';

import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Defalut = Template.bind({});
Defalut.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor',
};

export const DefalutDark = Template.bind({});
DefalutDark.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor',
};
DefalutDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum',
};
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem ipsum',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Lorem ipsum',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor',
  theme: TextTheme.ERROR,
};
