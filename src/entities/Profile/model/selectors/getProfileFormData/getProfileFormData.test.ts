import { StateSchema } from 'app/providers/StoreProvider'
import { Countries } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileFormData } from './getProfileFormData'

const data = {
	age: 24,
	city: 'Kharkiv',
	country: Countries.France,
	currency: Currency.EUR,
	firstName: 'John',
	lastName: 'Doe',
	username: 'UserName',
}

describe('getProfileFormData.test', () => {
	test('should return correct form data', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: data,
			},
		}
		expect(getProfileFormData(state as StateSchema)).toEqual(data)
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileFormData(state as StateSchema)).toEqual(undefined)
	})
})
