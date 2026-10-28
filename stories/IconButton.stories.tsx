import type { Meta, StoryObj } from '@storybook/react-vite';
import { GitHubIcon, IconButton, MoonIcon, SunIcon } from '../src';

const meta = {
	title: 'Actions/IconButton',
	component: IconButton,
	args: { 'aria-label': 'GitHub', children: <GitHubIcon /> },
	parameters: {
		docs: { description: { component: '아이콘만 있는 버튼. 스크린 리더를 위해 `aria-label`이 필수입니다.' } },
	},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Group: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 4 }}>
			<IconButton aria-label="GitHub">
				<GitHubIcon />
			</IconButton>
			<IconButton aria-label="라이트">
				<SunIcon />
			</IconButton>
			<IconButton aria-label="다크">
				<MoonIcon />
			</IconButton>
		</div>
	),
};
