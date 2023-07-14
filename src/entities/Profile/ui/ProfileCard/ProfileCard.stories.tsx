import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    username: 'admin',
    age: 24,
    country: Country.Armenia,
    first: 'Gor',
    lastname: 'Saroyan',
    currency: Currency.USD,
    city: 'Yerevan',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};
