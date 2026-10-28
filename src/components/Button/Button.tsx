import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './Button.module.css';

type ButtonBaseProps = {
	variant?: 'primary' | 'secondary';
};
type ButtonAsLink = ButtonBaseProps & ComponentPropsWithoutRef<'a'> & { href: string };
type ButtonAsButton = ButtonBaseProps & ComponentPropsWithoutRef<'button'> & { href?: undefined };

/** href가 있으면 <a>, 없으면 <button>으로 렌더링한다 */
export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = 'secondary', className, ...props }: ButtonProps) {
	const classes = cx(styles.button, styles[variant], className);
	if (props.href !== undefined) {
		return <a className={classes} {...(props as ComponentPropsWithoutRef<'a'>)} />;
	}
	return <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<'button'>)} />;
}
