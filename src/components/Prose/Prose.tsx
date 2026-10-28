import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cx } from '../../utils/cx';
import styles from './Prose.module.css';

export interface ProseProps extends ComponentPropsWithoutRef<'div'> {
	as?: ElementType;
}

/** 마크다운에서 나온 HTML(제목, 목록, 표, 인용문, 코드)을 꾸며 주는 본문 영역 */
export function Prose({ as: Tag = 'div', className, ...props }: ProseProps) {
	return <Tag className={cx(styles.prose, className)} {...props} />;
}
