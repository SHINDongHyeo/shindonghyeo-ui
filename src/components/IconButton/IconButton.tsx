import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './IconButton.module.css';

type IconButtonAsLink = ComponentPropsWithoutRef<'a'> & { href: string; 'aria-label': string };
type IconButtonAsButton = ComponentPropsWithoutRef<'button'> & { href?: undefined; 'aria-label': string };

/** 아이콘만 있는 정사각형 버튼. 스크린 리더를 위해 aria-label이 필수다 */
export type IconButtonProps = IconButtonAsLink | IconButtonAsButton;

export function IconButton({ className, ...props }: IconButtonProps) {
	const classes = cx(styles.iconButton, className);
	if (props.href !== undefined) {
		return <a className={classes} {...(props as ComponentPropsWithoutRef<'a'>)} />;
	}
	return <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<'button'>)} />;
}
