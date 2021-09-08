import { Story, Meta } from '@storybook/react/types-6-0';
import Topboard from '.';

export default {
	title: 'Topboard',
	component: Topboard,
	args: {
		title: 'Topboard',
		description: 'Topboard',
	},
} as Meta;

export const Basic: Story = () => <Topboard />;
