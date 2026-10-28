import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts({ include: ['src'], entryRoot: 'src' })],
	css: {
		modules: {
			// 다른 사이트의 클래스와 겹치지 않도록 접두사를 붙인다
			generateScopedName: 'sd-[local]-[hash:base64:5]',
		},
	},
	build: {
		lib: {
			entry: 'src/index.ts',
			formats: ['es'],
			cssFileName: 'styles',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				// 파일 단위로 내보내야 'use client' 지시문이 컴포넌트별로 유지된다
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js',
			},
		},
	},
});
