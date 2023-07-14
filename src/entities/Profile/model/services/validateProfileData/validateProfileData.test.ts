import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '@/entities/Profile';

import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Armenia,
  first: 'Gor',
  lastname: 'Saroyan',
  currency: Currency.USD,
  city: 'Yerevan',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('validateProfileData.test', () => {
  test('success validate Profile Data', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect city', async () => {
    const result = validateProfileData({ ...data, city: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('incorrect username', async () => {
    const result = validateProfileData({ ...data, username: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });

  test('incorrect avatar', async () => {
    const result = validateProfileData({ ...data, avatar: 'avatar' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
  });
});
