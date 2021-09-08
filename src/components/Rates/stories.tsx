import { Story, Meta } from '@storybook/react/types-6-0';
import Rates from '.';

export default {
	title: 'Rates',
	component: Rates,
	args: {
		title: 'Rates',
		description: 'Rates',
	},
} as Meta;

export const Basic: Story = () => <Rates />;

