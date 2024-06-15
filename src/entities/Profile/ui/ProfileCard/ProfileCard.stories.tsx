import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Countries } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AvatarProfile from 'shared/assets/test/stories-avatar.jpg'

const data = {
	age: 15,
	avatar: AvatarProfile,
	city: 'Kharkiv',
	country: Countries.Ukraine,
	currency: Currency.UAH,
	firstName: 'John',
	lastName: 'Doe',
	username: 'User name'
}

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/test',
	},
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
	data
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	data
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]


export const Error = Template.bind({})
Error.args = {
	error: "error"
}

export const ErrorDark = Template.bind({})
ErrorDark.args = {
	error: "error"
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]


export const Loading = Template.bind({})
Loading.args = {
	isLoading: true
}

export const LoadingDark = Template.bind({})
LoadingDark.args = {
	isLoading: true
}

LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]
