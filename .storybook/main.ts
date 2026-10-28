import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],
	addons: ['@storybook/addon-docs'],
	framework: '@storybook/react-vite',
	core: { disableTelemetry: true },
	async viteFinal(config) {
		// 라이브러리 빌드 설정(build.lib)과 타입 생성 플러그인은 Storybook에는 필요 없다
		config.plugins = config.plugins?.flat().filter((plugin) => !(plugin && 'name' in plugin && plugin.name.startsWith('vite:dts')));
		if (config.build) delete config.build.lib;
		return config;
	},
};

export default config;
