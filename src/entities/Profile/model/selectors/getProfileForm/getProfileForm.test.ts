import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          first: 'Gor',
        },
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual({ first: 'Gor' });
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
