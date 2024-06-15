import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AvatarProfile from 'shared/assets/test/stories-avatar.jpg'
import { Currency } from 'entities/Currency'
import { Countries } from 'entities/Country'
import ProfilePage from './ProfilePage'

const data = {
	age: 15,
	avatar: AvatarProfile,
	city: 'Kharkiv',
	country: Countries.Ukraine,
	currency: Currency.UAH,
	firstName: 'John',
	lastName: 'Doe',
	username: 'User name',
}

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args: {}) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
	profile: {
		form: data,
	},
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	profile: {
		form: data,
	},
})]
