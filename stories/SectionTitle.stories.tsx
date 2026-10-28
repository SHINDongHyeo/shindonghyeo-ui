import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip, SectionTitle } from '../src';

const meta = {
	title: 'Layout/SectionTitle',
	component: SectionTitle,
	args: { children: '최근 글' },
	argTypes: { action: { control: false } },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
	args: { action: <a href="#">전체 보기 →</a> },
};

export const WithCount: Story = {
	args: {
		children: (
			<>
				2026 <Chip variant="accent">12</Chip>
			</>
		),
	},
};
