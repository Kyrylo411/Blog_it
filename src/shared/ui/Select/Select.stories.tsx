import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/test',
	},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: "choose options",
	options: [
		{ value: '123', content: 'First option' },
		{ value: '456', content: 'Second option' },
		{ value: '789', content: 'Third option' },
	]
}
