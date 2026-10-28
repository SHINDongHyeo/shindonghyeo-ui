import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './Container.module.css';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
	/** 1024px 이상에서 넓은 폭(--sd-wide-width)을 쓴다 */
	wide?: boolean;
}

export function Container({ wide = false, className, ...props }: ContainerProps) {
	return <div className={cx(styles.container, wide && styles.wide, className)} {...props} />;
}
