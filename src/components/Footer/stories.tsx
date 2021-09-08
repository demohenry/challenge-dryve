import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from '.';

export default {
	title: 'Footer',
	component: Footer,
	args: {
		title: 'Footer',
		description: 'Footer',
	},
} as Meta;

export const Basic: Story = () => <Footer />;

