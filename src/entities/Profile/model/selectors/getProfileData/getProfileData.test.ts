import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return data', () => {
    const data = {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
