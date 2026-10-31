import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './AccentText.module.css';

/** 포인트 색 글자 */
export function AccentText({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
	return <span className={cx(styles.accentText, className)} {...props} />;
}

/** @deprecated 그라데이션을 없앴습니다. AccentText를 쓰세요. */
export const GradientText = AccentText;
