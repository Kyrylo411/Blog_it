import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
	title: '/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/test',
	},
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
