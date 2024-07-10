import { AddNewCommentSchema } from '../types/addNewComment'
import { addNewCommentActions, addNewCommentReducer } from './addNewCommentSlice'


describe('add new comment slice test', () => {
	test('set comment', () => {
		const state: DeepPartial<AddNewCommentSchema> = { text: '' }
		expect(addNewCommentReducer(
			state as AddNewCommentSchema,
			addNewCommentActions.setText('new comment')
		)).toEqual({ text: 'new comment' })
	})
})
