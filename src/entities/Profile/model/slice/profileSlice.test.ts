import { Countries } from 'entities/Country'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from 'entities/Currency'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
	age: 24,
	city: 'Kharkiv',
	country: Countries.France,
	currency: Currency.EUR,
	firstName: "John",
	lastName: "Doe",
	username: 'UserName'
}

describe('profile slice test', () => {

	test('set readonly', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: true }

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadOnly(false),
		)).toEqual({ readonly: false })
	})

	test('cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.cancelEdit(),
		)).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data
		})
	})

	test('update profile data', () => {
		const state: DeepPartial<ProfileSchema> = { form: { username: 'test' } }

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfileData({ username: 'admin' }),
		)).toEqual({
			form: { username: 'admin' }
		})
	})

	test('update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR]
		}
		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending,
		)).toEqual({
			isLoading: true,
			validateErrors: undefined
		})
	})

	test('update profile service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		}
		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled(data, ''),
		)).toEqual({
			isLoading: false,
			validateErrors: undefined,
			data,
			readonly: true,
			form: data
		})
	})
})
