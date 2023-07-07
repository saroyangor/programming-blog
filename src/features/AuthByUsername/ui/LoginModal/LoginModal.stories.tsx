import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
Default.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  isOpen: true,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];
