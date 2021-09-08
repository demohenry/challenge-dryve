import { Story, Meta } from '@storybook/react/types-6-0';
import VehicleData from '.';

export default {
	title: 'VehicleData',
	component: VehicleData,
	args: {
		title: 'VehicleData',
		description: 'VehicleData',
	},
} as Meta;

export const Basic: Story = () => <VehicleData />;

