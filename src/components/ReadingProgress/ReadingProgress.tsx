'use client';

import { useEffect, useRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './ReadingProgress.module.css';

export interface ReadingProgressProps {
	/** 'attached'는 Navbar 아래쪽에, 'fixed'는 화면 맨 위에 붙는다 */
	position?: 'attached' | 'fixed';
	className?: string;
}

/** 스크롤한 만큼 차오르는 읽기 진행 바 */
export function ReadingProgress({ position = 'attached', className }: ReadingProgressProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let frame = 0;
		function update() {
			frame = 0;
			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			ref.current?.style.setProperty('--progress', String(max > 0 ? doc.scrollTop / max : 0));
		}
		function onScroll() {
			if (!frame) frame = requestAnimationFrame(update);
		}
		update();
		addEventListener('scroll', onScroll, { passive: true });
		addEventListener('resize', onScroll);
		return () => {
			removeEventListener('scroll', onScroll);
			removeEventListener('resize', onScroll);
			cancelAnimationFrame(frame);
		};
	}, []);

	return <div ref={ref} className={cx(styles.progress, styles[position], className)} aria-hidden="true" />;
}
