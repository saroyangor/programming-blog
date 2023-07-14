import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Armenia,
  first: 'Gor',
  lastname: 'Saroyan',
  currency: Currency.USD,
  city: 'Yerevan',
};

describe('fetchProfileData.test', () => {
  test('success get Profile Data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('get Profile Data with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
