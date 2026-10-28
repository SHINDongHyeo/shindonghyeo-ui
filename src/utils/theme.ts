export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

/**
 * 첫 렌더 전에 저장된 테마(없으면 시스템 설정)를 <html data-theme>에 적용하는 스크립트.
 * <head> 안에 인라인으로 넣어야 화면이 깜빡이지 않는다.
 */
export const themeInitScript = `(() => {
	let theme;
	try { theme = localStorage.getItem('${THEME_STORAGE_KEY}'); } catch {}
	if (theme !== 'light' && theme !== 'dark') {
		theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	document.documentElement.dataset.theme = theme;
})();`;
