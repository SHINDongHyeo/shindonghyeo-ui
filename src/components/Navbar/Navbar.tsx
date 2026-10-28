import type { ElementType, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Container } from '../Container/Container';
import styles from './Navbar.module.css';

export interface NavItem {
	href: string;
	label: ReactNode;
	active?: boolean;
}

export interface NavbarProps {
	/** 왼쪽 브랜드 영역 (로고와 사이트 이름) */
	brand: ReactNode;
	brandHref?: string;
	links?: NavItem[];
	/** 오른쪽 끝 아이콘 버튼들 (GitHub, ThemeToggle 등) */
	actions?: ReactNode;
	/** 링크에 쓸 컴포넌트. Next.js라면 next/link의 Link를 넘긴다 */
	linkAs?: ElementType;
	className?: string;
	/** 메뉴바 아래쪽에 붙일 요소 (예: <ReadingProgress />) */
	children?: ReactNode;
}

/** 화면 위에 붙어 있는 반투명 메뉴바 */
export function Navbar({ brand, brandHref = '/', links = [], actions, linkAs: Link = 'a', className, children }: NavbarProps) {
	return (
		<header className={cx(styles.header, className)}>
			<Container wide>
				<nav className={styles.nav}>
					<Link className={styles.brand} href={brandHref}>
						{brand}
					</Link>
					<div className={styles.right}>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cx(styles.link, link.active && styles.active)}
								aria-current={link.active ? 'page' : undefined}
							>
								{link.label}
							</Link>
						))}
						{actions && (
							<>
								{links.length > 0 && <span className={styles.divider} aria-hidden="true" />}
								<div className={styles.actions}>{actions}</div>
							</>
						)}
					</div>
				</nav>
			</Container>
			{children}
		</header>
	);
}
