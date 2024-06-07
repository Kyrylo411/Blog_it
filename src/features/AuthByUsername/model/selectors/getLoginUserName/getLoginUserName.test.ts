import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUserName } from './getLoginUserName'

describe('getLoginLoading.test', () => {
	test('should return correct username', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'admin',
			},
		}
		expect(getLoginUserName(state as StateSchema)).toEqual('admin')
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginUserName(state as StateSchema)).toEqual('')
	})
})
