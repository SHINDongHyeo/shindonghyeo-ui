import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, GitHubIcon } from '../src';

const meta = {
	title: 'Actions/Button',
	component: Button,
	args: { children: '글 둘러보기 →', variant: 'primary' },
	argTypes: {
		variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
	},
	parameters: {
		docs: { description: { component: '`href`가 있으면 `<a>`, 없으면 `<button>`으로 렌더링합니다.' } },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
	args: { variant: 'secondary', children: '취소' },
};

export const WithIcon: Story = {
	args: {
		variant: 'secondary',
		children: (
			<>
				<GitHubIcon size={16} />
				GitHub
			</>
		),
	},
};

export const AsLink: Story = {
	args: { href: '#', children: '링크 버튼 →' },
};
