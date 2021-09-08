import { Story, Meta } from '@storybook/react/types-6-0';
import Charts from '.';

export default {
	title: 'Charts',
	component: Charts,
	args: {
		title: 'Charts',
		description: 'Charts',
	},
} as Meta;

export const Basic: Story = () => <Charts />;

