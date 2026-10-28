import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarIcon, Chip, ClockIcon } from '../src';

const meta = {
	title: 'Display/Chip',
	component: Chip,
	args: { children: '7분 읽기', variant: 'outline' },
	argTypes: {
		variant: { control: 'inline-radio', options: ['outline', 'accent'] },
		icon: { control: false },
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
	args: { icon: <ClockIcon /> },
};

export const Accent: Story = {
	args: { variant: 'accent', children: '12' },
};

export const PostMeta: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 8 }}>
			<Chip icon={<CalendarIcon />}>2026년 10월 28일</Chip>
			<Chip icon={<ClockIcon />}>7분 읽기</Chip>
		</div>
	),
};
