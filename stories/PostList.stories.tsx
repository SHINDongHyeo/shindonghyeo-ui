import type { Meta, StoryObj } from '@storybook/react-vite';
import { PostList } from '../src';
import { samplePosts } from './samples';

const meta = {
	title: 'Display/PostList',
	component: PostList,
	args: { items: samplePosts },
	parameters: {
		docs: {
			description: {
				component: '마우스를 올리면 옅은 배경이 깔리고 화살표가 나타나는 글 목록. `meta`의 항목은 가운뎃점으로 이어집니다.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PostList>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
