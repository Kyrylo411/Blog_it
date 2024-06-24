import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/test',
	},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Square = Template.bind({})
Square.args = {
	border: '12px',
	height: 300,
	width: 800,
}

export const SquareDark = Template.bind({})
SquareDark.args = {
	border: '12px',
	height: 300,
	width: 800,
}
SquareDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Circle = Template.bind({})
Circle.args = {
	border: '50%',
	height: 200,
	width: 200,
}

export const CircleDark = Template.bind({})
CircleDark.args = {
	border: '50%',
	height: 200,
	width: 200,
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
