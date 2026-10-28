import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer, Logo } from '../src';

const meta = {
	title: 'Layout/Footer',
	component: Footer,
	parameters: { layout: 'fullscreen' },
	args: {
		brand: (
			<>
				<Logo size={26} />
				신동혁의 개발 일기
			</>
		),
		description: '개발하면서 배우고 만든 것들을 기록합니다.',
		links: [
			{ href: '#', label: '글' },
			{ href: '#', label: '소개' },
			{ href: 'https://github.com/SHINDongHyeo', label: 'GitHub', external: true },
			{ href: '#', label: 'RSS' },
		],
		copyright: '© 2026 신동혁. Built with Astro.',
		backToTop: true,
	},
	argTypes: { brand: { control: false } },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
	args: { brand: undefined, description: undefined, links: [] },
};
