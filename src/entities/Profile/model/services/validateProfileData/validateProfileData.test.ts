import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { validateProfileData } from './validateProfileData'
import { Countries } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'

const data = {
	age: 34,
	city: 'Kharkiv',
	country: Countries.France,
	currency: Currency.EUR,
	firstName: "John",
	lastName: "Doe",
	username: 'UserName'
}

describe('validateProfileData.test', () => {
	test('success', async () => {
		const result = validateProfileData(data)
		expect(result).toEqual([])
	})
	test('incorrect age', async () => {
		const result = validateProfileData({ ...data, age: 0 })
		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
	})
	test('incorrect first and last name', async () => {
		const result = validateProfileData({ ...data, firstName: '', lastName: '' })
		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})
	test('incorrect country', async () => {
		const result = validateProfileData({ ...data, country: undefined })
		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
	})
	test('no data scenario', async () => {
		const result = validateProfileData()
		expect(result).toEqual([ValidateProfileError.NO_DATA])
	})
	test('incorrect all', async () => {
		const result = validateProfileData({})
		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		])
	})
})
