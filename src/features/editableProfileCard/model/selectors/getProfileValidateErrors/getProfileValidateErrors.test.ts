import { StateSchema } from '@/app/providers/StoreProvider';

import { ValidateProfileError } from '../../const/const';

import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.NO_DATA],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
