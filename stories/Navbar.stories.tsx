import type { Meta, StoryObj } from '@storybook/react-vite';
import { GitHubIcon, IconButton, Logo, Navbar, ReadingProgress, ThemeToggle } from '../src';

const meta = {
	title: 'Layout/Navbar',
	component: Navbar,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'화면 위에 붙어 있는 반투명 메뉴바. `active`인 링크는 알약 모양으로 강조됩니다. Next.js에서는 `linkAs={Link}`로 `next/link`를 쓸 수 있습니다.',
			},
		},
	},
	args: {
		brand: (
			<>
				<Logo />
				신동혁의 개발 일기
			</>
		),
		links: [
			{ href: '#', label: '홈' },
			{ href: '#', label: '글', active: true },
			{ href: '#', label: '소개' },
		],
		actions: (
			<>
				<IconButton href="#" aria-label="GitHub">
					<GitHubIcon />
				</IconButton>
				<ThemeToggle />
			</>
		),
	},
	argTypes: {
		brand: { control: false },
		actions: { control: false },
		children: { control: false },
	},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithReadingProgress: Story = {
	args: { children: <ReadingProgress /> },
	parameters: {
		docs: { description: { story: '`children`으로 넣은 `ReadingProgress`는 메뉴바 아래쪽에 붙습니다. 스크롤하면 차오릅니다.' } },
	},
	decorators: [
		(Story) => (
			<div style={{ minHeight: '200vh' }}>
				<Story />
			</div>
		),
	],
};
