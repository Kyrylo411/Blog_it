import { StateSchema } from 'app/providers/StoreProvider'
import { Countries } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

const data = {
	age: 24,
	city: 'Kharkiv',
	country: Countries.France,
	currency: Currency.EUR,
	firstName: 'John',
	lastName: 'Doe',
	username: 'UserName',
}

describe('getProfileData.test', () => {
	test('should return correct data', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data,
			},
		}
		expect(getProfileData(state as StateSchema)).toEqual(data)
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileData(state as StateSchema)).toEqual(undefined)
	})
})
