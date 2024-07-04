import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
	title: '/CommentList',
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
Normal.args = {}
