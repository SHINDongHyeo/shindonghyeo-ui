import type { Meta, StoryObj } from '@storybook/react-vite';
import { GradientText } from '../src';

const meta = {
	title: 'Display/GradientText',
	component: GradientText,
	args: { children: '개발자 신동혁' },
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<h1 style={{ fontSize: '2.6rem' }}>
			안녕하세요, <GradientText {...args} />
			입니다.
		</h1>
	),
};
