import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius enim odio quod?',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius enim odio quod?',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
