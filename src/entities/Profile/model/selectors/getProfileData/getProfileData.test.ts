import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'Gor',
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({ first: 'Gor' });
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
