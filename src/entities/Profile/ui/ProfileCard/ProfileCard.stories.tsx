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
