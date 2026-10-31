import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Container } from '../Container/Container';
import styles from './Banner.module.css';

export interface BannerProps {
	/** 제목 위의 작은 강조 문구. 문자열이나 링크 등 아무 요소나 넣을 수 있다 */
	eyebrow?: ReactNode;
	title?: ReactNode;
	description?: ReactNode;
	/** 넓은 레이아웃(목차가 있는 글 페이지 등)과 왼쪽 정렬을 맞춘다 */
	wide?: boolean;
	size?: 'md' | 'lg';
	className?: string;
	/** 제목 아래에 들어갈 내용 (버튼, 메타 정보 등) */
	children?: ReactNode;
}

/** 제목, 설명, 메타 정보를 담는 페이지 상단 머리말 */
export function Banner({ eyebrow, title, description, wide = false, size = 'md', className, children }: BannerProps) {
	return (
		<section className={cx(styles.banner, className)}>
			<Container wide={wide}>
				<div className={cx(styles.inner, styles[size])}>
					{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
					{title && <h1 className={styles.title}>{title}</h1>}
					{description && <p className={styles.description}>{description}</p>}
					{children}
				</div>
			</Container>
		</section>
	);
}
