import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccentText } from '../src';

const meta = {
	title: 'Display/AccentText',
	component: AccentText,
	args: { children: '개발자 신동혁' },
} satisfies Meta<typeof AccentText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<h1 style={{ fontSize: 'var(--sd-text-4xl)' }}>
			안녕하세요, <AccentText {...args} />
			입니다.
		</h1>
	),
};
