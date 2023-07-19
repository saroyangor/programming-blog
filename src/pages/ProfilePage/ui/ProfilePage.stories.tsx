import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    form: {
      username: 'admin',
      age: 24,
      country: Country.Armenia,
      first: 'Gor',
      lastname: 'Saroyan',
      currency: Currency.USD,
      city: 'Yerevan',
    },
  },
})];
