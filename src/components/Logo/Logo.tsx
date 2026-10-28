import type { CSSProperties, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Logo.module.css';

export interface LogoProps {
	size?: number;
	/** 마크 안에 들어갈 글자 */
	children?: ReactNode;
	className?: string;
}

export function Logo({ size = 30, children = '신', className }: LogoProps) {
	return (
		<span className={cx(styles.logo, className)} style={{ '--size': `${size}px` } as CSSProperties} aria-hidden="true">
			{children}
		</span>
	);
}
