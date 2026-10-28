'use client';

import { cx } from '../../utils/cx';
import { THEME_STORAGE_KEY } from '../../utils/theme';
import { IconButton } from '../IconButton/IconButton';
import { MoonIcon, SunIcon } from '../icons/icons';
import styles from './ThemeToggle.module.css';

export interface ThemeToggleProps {
	className?: string;
}

/**
 * 라이트/다크 모드 전환 버튼.
 * 어떤 아이콘을 보일지는 CSS가 <html data-theme>을 보고 정하므로 첫 화면부터 맞는 아이콘이 나온다.
 * 깜빡임을 막으려면 <head>에 themeInitScript도 함께 넣는다.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
	function toggle() {
		const root = document.documentElement;
		const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
		root.dataset.theme = next;
		try {
			localStorage.setItem(THEME_STORAGE_KEY, next);
		} catch {}
	}

	return (
		<IconButton aria-label="다크 모드 전환" onClick={toggle} className={cx(styles.toggle, className)}>
			<SunIcon className={styles.sun} />
			<MoonIcon className={styles.moon} />
		</IconButton>
	);
}
