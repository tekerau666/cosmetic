import {
	profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
	firstName: 'Fucker',
	lastName: 'Vocnel',
	age: 90,
	currency: Currency.RUB,
	country: Country.Serbia,
	city: 'Moscow',
	username: 'admin',
	avatar: 'https://balakovo24.ru/b24/uploads/2021/09/владислав-поздняков.jpg'
};

describe('profileSlice.test', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };
		expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
		)).toEqual({ readonly: true });
	});

	test('test cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

		expect(profileReducer(
            state as ProfileSchema,
            profileActions.canceledEdit(),
		)).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});

	test('test update profile', () => {
		const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

		expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfileData({
            	username: '123456',
            }),
		)).toEqual({
			form: { username: '123456' },
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileError.SERVER_ERROR],
		};

		expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
		)).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fullfiled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};

		expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
		)).toEqual({
			isLoading: false,
			validateErrors: undefined,
			readonly: true,
			validateError: undefined,
			form: data,
			data,
		});
	});
});
