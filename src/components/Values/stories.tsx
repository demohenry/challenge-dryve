import { Story, Meta } from '@storybook/react/types-6-0';
import Values, { ValuesProps } from '.';

export default {
	title: 'Values',
	component: Values,
	args: {
		title: 'Values',
		description: 'Values',
	},
} as Meta;

export const Default: Story<ValuesProps> = (args) => <Values {...args} />;

Default.args = {
	children: '25',
};
