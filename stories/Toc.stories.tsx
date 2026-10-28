import type { Meta, StoryObj } from '@storybook/react-vite';
import { Prose, Toc } from '../src';
import { SampleArticle, sampleToc } from './samples';

const meta = {
	title: 'Content/Toc',
	component: Toc,
	args: { items: sampleToc, title: '목차', variant: 'sidebar' },
	argTypes: { variant: { control: 'inline-radio', options: ['sidebar', 'inline'] } },
	parameters: {
		docs: {
			description: {
				component:
					'`sidebar`는 옆에 따라다니며 지금 읽는 제목을 강조하고, `inline`은 본문 위에 접었다 펴는 목차입니다. `items`의 `id`는 본문 제목 요소의 id와 같아야 합니다.',
			},
		},
	},
} satisfies Meta<typeof Toc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sidebar: Story = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 240 }}>
				<Story />
			</div>
		),
	],
};

export const Inline: Story = {
	args: { variant: 'inline' },
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 680 }}>
				<Story />
			</div>
		),
	],
};

export const WithArticle: Story = {
	parameters: {
		layout: 'fullscreen',
		docs: { description: { story: '스크롤하면 현재 읽는 제목이 강조됩니다. (캔버스 탭에서 보세요)' } },
	},
	render: (args) => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'minmax(0, 680px) 220px',
				justifyContent: 'center',
				gap: 56,
				padding: '48px 24px 50vh',
			}}
		>
			<Prose>
				<SampleArticle />
			</Prose>
			<Toc {...args} />
		</div>
	),
};
