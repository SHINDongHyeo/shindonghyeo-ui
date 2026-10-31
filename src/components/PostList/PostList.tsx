import type { ElementType, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './PostList.module.css';

export interface PostListItem {
	href: string;
	title: ReactNode;
	description?: ReactNode;
	/** 날짜, 읽는 시간처럼 아래에 가운뎃점으로 이어 보여 줄 정보 */
	meta?: ReactNode[];
}

export interface PostListProps {
	items: PostListItem[];
	/** 링크에 쓸 컴포넌트. Next.js라면 next/link의 Link를 넘긴다 */
	linkAs?: ElementType;
	className?: string;
}

/** 마우스를 올리면 옅은 배경이 깔리는 글 목록 */
export function PostList({ items, linkAs: Link = 'a', className }: PostListProps) {
	return (
		<ul className={cx(styles.list, className)}>
			{items.map((item) => (
				<li key={item.href}>
					<Link className={styles.item} href={item.href}>
						<div className={styles.body}>
							<h3 className={styles.title}>{item.title}</h3>
							{item.description && <p className={styles.description}>{item.description}</p>}
							{item.meta && item.meta.length > 0 && (
								<div className={styles.meta}>
									{item.meta.map((m, i) => (
										<span key={i}>{m}</span>
									))}
								</div>
							)}
						</div>
						<span className={styles.arrow} aria-hidden="true">
							→
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
