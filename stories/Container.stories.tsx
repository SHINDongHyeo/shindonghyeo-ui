import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../src';

const meta = {
	title: 'Layout/Container',
	component: Container,
	args: { wide: false },
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: '내용을 가운데 정렬합니다. 기본은 본문 폭(680px), `wide`는 1024px 이상 화면에서 넓은 폭(980px)입니다.',
			},
		},
	},
	render: (args) => (
		<Container {...args}>
			<div
				style={{
					padding: 24,
					borderRadius: 'var(--sd-radius-md)',
					background: 'var(--sd-accent-soft)',
					border: '1px dashed var(--sd-accent)',
					textAlign: 'center',
				}}
			>
				{args.wide ? 'wide: 980px' : '기본: 680px'}
			</div>
		</Container>
	),
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Wide: Story = { args: { wide: true } };
