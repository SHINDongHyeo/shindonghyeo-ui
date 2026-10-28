import type { Meta, StoryObj } from '@storybook/react-vite';
import { Prose, ReadingProgress } from '../src';
import { SampleArticle } from './samples';

const meta = {
	title: 'Content/ReadingProgress',
	component: ReadingProgress,
	args: { position: 'fixed' },
	argTypes: { position: { control: 'inline-radio', options: ['attached', 'fixed'] } },
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'스크롤한 만큼 차오르는 진행 바. `attached`는 Navbar 아래쪽에, `fixed`는 화면 맨 위에 붙습니다. 캔버스 탭에서 스크롤해 보세요.',
			},
		},
	},
	render: (args) => (
		<>
			<ReadingProgress {...args} />
			<div style={{ maxWidth: 680, margin: '0 auto', padding: '48px 24px' }}>
				<Prose>
					<SampleArticle />
				</Prose>
			</div>
		</>
	),
} satisfies Meta<typeof ReadingProgress>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
