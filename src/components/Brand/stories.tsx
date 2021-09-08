import { Story, Meta } from '@storybook/react/types-6-0';
import Brand from '.';

export default {
	title: 'Brand',
	component: Brand,
	args: {
		title: 'Brand',
		description: 'Brand',
	},
} as Meta;

export const Basic: Story = () => <Brand />;
