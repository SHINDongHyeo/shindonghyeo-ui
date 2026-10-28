import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
	theme: create({
		base: 'light',
		brandTitle: 'shindonghyeo-ui',
		brandUrl: 'https://github.com/SHINDongHyeo/shindonghyeo-ui',
		colorPrimary: '#0d9488',
		colorSecondary: '#0d9488',
		fontBase: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
	}),
});
