import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentList } from './CommentList'
import { Comment } from 'entities/Comment/model/types/comment'


const commentsList: Comment[] = [
	{
		id: '1',
		text: '123',
		user: { id: '1', username: 'username' }
	},
	{
		id: '2',
		text: 'text',
		user: { id: '2', username: 'some user' }
	},
	{
		id: '3',
		text: 'asd',
		user: { id: '1', username: 'loader' }
	}
]

export default {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/test',
	},
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
	comments: commentsList,
	isLoading: false
}

export const Loading = Template.bind({})
Loading.args = {
	isLoading: true,
	comments: commentsList
}

export const NoComments = Template.bind({})
NoComments.args = {
	comments: [],
	isLoading: false
}
