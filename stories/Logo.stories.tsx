import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from '../src';

const meta = {
	title: 'Display/Logo',
	component: Logo,
	args: { size: 30, children: '신' },
	argTypes: { size: { control: { type: 'range', min: 16, max: 96, step: 2 } } },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
			{[20, 26, 30, 48, 72].map((size) => (
				<Logo key={size} size={size} />
			))}
		</div>
	),
};
