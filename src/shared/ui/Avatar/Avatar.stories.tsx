import { ComponentMeta, ComponentStory } from '@storybook/react'
import AvatarProfile from 'shared/assets/test/stories-avatar.jpg'
import { Avatar } from './Avatar'

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/test',
	},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
	size: 300,
	src: AvatarProfile,
	alt: 'profile avatar',
}

export const Small = Template.bind({})
Small.args = {
	size: 100,
	src: AvatarProfile,
	alt: 'profile avatar',
}
