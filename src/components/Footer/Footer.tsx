import type { ElementType, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Container } from '../Container/Container';
import styles from './Footer.module.css';

export interface FooterLink {
	href: string;
	label: ReactNode;
	external?: boolean;
}

export interface FooterProps {
	brand?: ReactNode;
	description?: ReactNode;
	links?: FooterLink[];
	copyright?: ReactNode;
	/** "맨 위로" 링크를 보여 줄지 여부 */
	backToTop?: boolean;
	linkAs?: ElementType;
	className?: string;
}

export function Footer({
	brand,
	description,
	links = [],
	copyright,
	backToTop = true,
	linkAs: Link = 'a',
	className,
}: FooterProps) {
	return (
		<footer className={cx(styles.footer, className)}>
			<Container wide>
				{(brand || description || links.length > 0) && (
					<div className={styles.top}>
						<div>
							{brand && <div className={styles.brand}>{brand}</div>}
							{description && <p className={styles.description}>{description}</p>}
						</div>
						{links.length > 0 && (
							<nav className={styles.links}>
								{links.map((link) =>
									link.external ? (
										<a key={link.href} href={link.href} target="_blank" rel="noopener">
											{link.label}
										</a>
									) : (
										<Link key={link.href} href={link.href}>
											{link.label}
										</Link>
									),
								)}
							</nav>
						)}
					</div>
				)}
				<div className={styles.bottom}>
					<span>{copyright}</span>
					{backToTop && <a href="#">맨 위로 ↑</a>}
				</div>
			</Container>
		</footer>
	);
}
