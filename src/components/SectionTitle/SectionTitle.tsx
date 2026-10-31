import type { ElementType, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './SectionTitle.module.css';

export interface SectionTitleProps {
	as?: ElementType;
	/** 제목 오른쪽 끝에 놓을 요소 (예: "전체 보기 →" 링크) */
	action?: ReactNode;
	className?: string;
	children: ReactNode;
}

/** 제목과 오른쪽 링크가 한 줄에 놓인 섹션 제목 */
export function SectionTitle({ as: Heading = 'h2', action, className, children }: SectionTitleProps) {
	return (
		<div className={cx(styles.head, className)}>
			<Heading className={styles.title}>{children}</Heading>
			{action && <div className={styles.action}>{action}</div>}
		</div>
	);
}
