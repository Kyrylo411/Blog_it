import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Countries } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchProfileData } from './fetchProfileData'

const data = {
	age: 24,
	city: 'Kharkiv',
	country: Countries.France,
	currency: Currency.EUR,
	firstName: 'John',
	lastName: 'Doe',
	username: 'UserName',
}

describe('fetchProfileData.test', () => {
	test('success data fetching', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)

		thunk.api.get.mockReturnValue(Promise.resolve({ data }))
		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(data)
	})
	test('data fetching with error', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)

		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual('error')
	})
})
