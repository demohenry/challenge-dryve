import { Story, Meta } from '@storybook/react/types-6-0';
import Sidebar from '.';

export default {
	title: 'Sidebar',
	component: Sidebar,
	args: {
		title: 'Sidebar',
		description: 'Menu',
	},
} as Meta;

export const Basic: Story = (args) => <Sidebar {...args} />;
Basic.args = {
	name: 'Name Basic',
};
