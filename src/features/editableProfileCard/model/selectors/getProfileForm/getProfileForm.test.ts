import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return first name', () => {
    const form = {
      username: 'admin',
      age: 24,
      country: Country.Armenia,
      first: 'Gor',
      lastname: 'Saroyan',
      currency: Currency.USD,
      city: 'Yerevan',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
