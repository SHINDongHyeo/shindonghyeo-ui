import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarIcon, ClockIcon, GitHubIcon, MoonIcon, SunIcon } from '../src';

const icons = { SunIcon, MoonIcon, GitHubIcon, CalendarIcon, ClockIcon };

function Icons({ size }: { size: number }) {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, color: 'var(--sd-text-strong)' }}>
			{Object.entries(icons).map(([name, Icon]) => (
				<div key={name} style={{ textAlign: 'center' }}>
					<Icon size={size} />
					<code style={{ display: 'block', marginTop: 8, fontSize: 12 }}>{name}</code>
				</div>
			))}
		</div>
	);
}

const meta = {
	title: 'Display/Icons',
	component: Icons,
	args: { size: 24 },
	argTypes: { size: { control: { type: 'range', min: 12, max: 48 } } },
	parameters: {
		docs: { description: { component: '`currentColor`를 따르므로 부모의 글자 색을 바꾸면 아이콘 색도 바뀝니다.' } },
	},
} satisfies Meta<typeof Icons>;

export default meta;

export const All: StoryObj<typeof meta> = {};
