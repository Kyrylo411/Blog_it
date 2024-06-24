import { StateSchema } from 'app/providers/StoreProvider'
import { Countries } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

const data = {
	age: 24,
	city: 'Kharkiv',
	country: Countries.France,
	currency: Currency.EUR,
	firstName: 'John',
	lastName: 'Doe',
	username: 'UserName',
}

describe('articleDetails.test', () => {
	test('should return correct article data', () => {
		const data = {
			id: '1',
			title: 'Title',
		}

		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			},
		}
		expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
	})

	test('should return loading equal true', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			},
		}
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
	})

	test('should work with empty state with loading', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
	})

	test('should return error message', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: 'error',
			},
		}
		expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
	})

	test('should work with empty state error', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
	})
})
