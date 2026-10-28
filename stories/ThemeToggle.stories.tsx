import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from '../src';

const meta = {
	title: 'Actions/ThemeToggle',
	component: ThemeToggle,
	parameters: {
		docs: {
			description: {
				component:
					'누르면 `<html data-theme>`을 바꾸고 localStorage에 저장합니다. 첫 화면 깜빡임을 막으려면 `<head>`에 `themeInitScript`를 인라인으로 넣으세요. (Storybook에서는 툴바의 Theme 버튼이 테마를 다시 덮어쓸 수 있습니다.)',
			},
		},
	},
} satisfies Meta<typeof ThemeToggle>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
