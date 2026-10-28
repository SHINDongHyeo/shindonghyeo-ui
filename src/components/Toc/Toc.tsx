'use client';

import { useEffect, useState } from 'react';
import { cx } from '../../utils/cx';
import styles from './Toc.module.css';

export interface TocItem {
	/** 제목 요소의 id */
	id: string;
	text: string;
	/** 2 = h2, 3 = h3 */
	depth: number;
}

export interface TocProps {
	items: TocItem[];
	title?: string;
	/** 'sidebar'는 옆에 따라다니는 목차, 'inline'은 본문 위에 접었다 펴는 목차 */
	variant?: 'sidebar' | 'inline';
	className?: string;
}

/** 지금 읽고 있는 제목을 강조해 주는 목차 */
export function Toc({ items, title = '목차', variant = 'sidebar', className }: TocProps) {
	const activeId = useActiveHeading(variant === 'sidebar' ? items : []);

	const list = (
		<ol className={styles.list}>
			{items.map((item) => (
				<li key={item.id} className={item.depth >= 3 ? styles.sub : undefined}>
					<a href={`#${item.id}`} className={cx(styles.link, item.id === activeId && styles.active)}>
						{item.text}
					</a>
				</li>
			))}
		</ol>
	);

	if (variant === 'inline') {
		return (
			<details className={cx(styles.inline, className)}>
				<summary>{title}</summary>
				{list}
			</details>
		);
	}
	return (
		<nav className={cx(styles.sidebar, className)} aria-label={title}>
			<p className={styles.title}>{title}</p>
			{list}
		</nav>
	);
}

// 화면 위쪽을 지난 마지막 제목을 현재 위치로 본다
function useActiveHeading(items: TocItem[], offset = 140) {
	const [activeId, setActiveId] = useState<string>();

	useEffect(() => {
		if (items.length === 0) return;
		let frame = 0;
		function update() {
			frame = 0;
			let current: string | undefined;
			for (const item of items) {
				const el = document.getElementById(item.id);
				if (el && el.getBoundingClientRect().top < offset) current = item.id;
			}
			setActiveId(current);
		}
		function onScroll() {
			if (!frame) frame = requestAnimationFrame(update);
		}
		update();
		addEventListener('scroll', onScroll, { passive: true });
		return () => {
			removeEventListener('scroll', onScroll);
			cancelAnimationFrame(frame);
		};
	}, [items, offset]);

	return activeId;
}
