import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Chip.module.css';

export interface ChipProps extends ComponentPropsWithoutRef<'span'> {
	icon?: ReactNode;
	variant?: 'outline' | 'accent';
}

export function Chip({ icon, variant = 'outline', className, children, ...props }: ChipProps) {
	return (
		<span className={cx(styles.chip, styles[variant], className)} {...props}>
			{icon}
			{children}
		</span>
	);
}
