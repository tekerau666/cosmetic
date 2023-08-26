import {TestAsyncThunk} from '../../../../../shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import {fetchProfileData} from '../../../../../entities/Profile';
import {Currency} from '../../../../../entities/Currency';
import {Country} from '../../../../../entities/Country';


describe('fetchProfileData.test', () => {
	const data = {
		firstName: 'Pavel23',
		lastName: 'Vocnel',
		age: 90,
		currency: Currency.RUB,
		country: Country.Serbia,
		city: 'Moscow',
		username: 'admin',
		avatar: 'https://balakovo24.ru/b24/uploads/2021/09/владислав-поздняков.jpg'
	};
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
		const result = await thunk.callThunk();
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error login', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
