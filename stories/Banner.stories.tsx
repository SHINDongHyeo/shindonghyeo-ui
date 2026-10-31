import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner, Button, CalendarIcon, Chip, ClockIcon, GitHubIcon, AccentText } from '../src';

const meta = {
	title: 'Layout/Banner',
	component: Banner,
	parameters: {
		layout: 'fullscreen',
		docs: { description: { component: '제목, 설명, 메타 정보를 담는 페이지 상단 머리말.' } },
	},
	args: {
		eyebrow: 'Archive',
		title: '모든 글',
		description: '지금까지 12개의 글을 썼어요.',
		size: 'md',
		wide: false,
	},
	argTypes: {
		size: { control: 'inline-radio', options: ['md', 'lg'] },
		children: { control: false },
	},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hero: Story = {
	args: {
		size: 'lg',
		eyebrow: 'Dev Log',
		title: (
			<>
				안녕하세요,
				<br />
				<AccentText>개발자 신동혁</AccentText>입니다.
			</>
		),
		description: '개발하면서 배우고 만든 것들을 기록합니다.',
		children: (
			<div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
				<Button variant="primary" href="#">
					글 둘러보기 →
				</Button>
				<Button href="#">
					<GitHubIcon size={16} />
					GitHub
				</Button>
			</div>
		),
	},
};

export const PostHeader: Story = {
	args: {
		eyebrow: <a href="#">← 글 목록</a>,
		title: '우아콘 2026 참관기',
		description: '우아한형제들 기술 컨퍼런스에서 들은 7개 세션의 내용과 그에 대한 제 생각을 정리했습니다.',
		children: (
			<div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
				<Chip icon={<CalendarIcon />}>2026년 10월 28일</Chip>
				<Chip icon={<ClockIcon />}>7분 읽기</Chip>
			</div>
		),
	},
};
