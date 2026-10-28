import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './GradientText.module.css';

export function GradientText({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
	return <span className={cx(styles.gradientText, className)} {...props} />;
}
