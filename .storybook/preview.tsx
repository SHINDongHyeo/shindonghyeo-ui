import type { Decorator, Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';
import '../src/styles/base.css';

// 툴바에서 고른 테마를 <html data-theme>에 반영한다
const withTheme: Decorator = (Story, context) => {
	document.documentElement.dataset.theme = context.globals.theme;
	return <Story />;
};

const preview: Preview = {
	tags: ['autodocs'],
	decorators: [withTheme],
	globalTypes: {
		theme: {
			description: '라이트/다크 모드',
			toolbar: {
				title: 'Theme',
				icon: 'mirror',
				items: [
					{ value: 'light', title: '라이트', icon: 'sun' },
					{ value: 'dark', title: '다크', icon: 'moon' },
				],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: 'light',
	},
	parameters: {
		layout: 'padded',
		controls: { expanded: true },
		options: {
			storySort: {
				order: ['소개', 'Foundations', 'Layout', 'Actions', 'Display', 'Content'],
			},
		},
	},
};

export default preview;
