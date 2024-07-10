import { StateSchema } from 'app/providers/StoreProvider'
import { getAddNewCommentText, getAddNewCommentError } from './addNewCommentSelector'

describe('addNewCommentSelector.test', () => {
	test('should return correct text', () => {
		const state: DeepPartial<StateSchema> = {
			addNewComment: {
				text: 'some comment',
			},
		}
		expect(getAddNewCommentText(state as StateSchema)).toEqual('some comment')
	})

	test('should return with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			addNewComment: {
				text: '',
			},
		}
		expect(getAddNewCommentText(state as StateSchema)).toEqual('')
	})

	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			addNewComment: {
				error: 'error',
			},
		}
		expect(getAddNewCommentError(state as StateSchema)).toEqual('error')
	})
})
