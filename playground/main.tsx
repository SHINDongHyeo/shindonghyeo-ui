import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	Banner,
	Button,
	CalendarIcon,
	Chip,
	ClockIcon,
	Container,
	Footer,
	GitHubIcon,
	GradientText,
	IconButton,
	Logo,
	Navbar,
	PostList,
	Prose,
	ReadingProgress,
	SectionTitle,
	ThemeToggle,
	Toc,
} from '../src';
import './playground.css';

const toc = [
	{ id: 'colors', text: '색과 토큰', depth: 2 },
	{ id: 'buttons', text: '버튼과 칩', depth: 2 },
	{ id: 'posts', text: '글 목록', depth: 2 },
	{ id: 'prose', text: '본문 스타일', depth: 2 },
	{ id: 'prose-table', text: '표와 인용문', depth: 3 },
];

const swatches = ['--sd-accent', '--sd-accent-2', '--sd-text-strong', '--sd-text-muted', '--sd-bg-subtle', '--sd-border'];

function App() {
	return (
		<>
			<Navbar
				brand={
					<>
						<Logo />
						shindonghyeo-ui
					</>
				}
				links={[
					{ href: '#', label: '컴포넌트', active: true },
					{ href: '#prose', label: '본문' },
				]}
				actions={
					<>
						<IconButton href="https://github.com/SHINDongHyeo/shindonghyeo-ui" aria-label="GitHub">
							<GitHubIcon />
						</IconButton>
						<ThemeToggle />
					</>
				}
			>
				<ReadingProgress />
			</Navbar>

			<Banner
				size="lg"
				wide
				eyebrow="Design System"
				title={
					<>
						신동혁의
						<br />
						<GradientText>React 디자인 시스템</GradientText>
					</>
				}
				description="블로그에서 시작한 토큰과 컴포넌트를 어느 React 사이트에서나 쓸 수 있게 모았습니다."
			>
				<div className="row" style={{ marginTop: 28 }}>
					<Button variant="primary" href="#colors">
						컴포넌트 보기 →
					</Button>
					<Button href="https://github.com/SHINDongHyeo/shindonghyeo-ui">
						<GitHubIcon size={16} />
						GitHub
					</Button>
				</div>
			</Banner>

			<Container wide className="page">
				<div className="layout">
					<div>
						<section>
							<SectionTitle>
								<span id="colors">색과 토큰</span>
							</SectionTitle>
							<div className="swatches">
								{swatches.map((name) => (
									<div key={name} className="swatch">
										<span style={{ background: `var(${name})` }} />
										<code>{name}</code>
									</div>
								))}
							</div>
						</section>

						<section>
							<SectionTitle>
								<span id="buttons">버튼과 칩</span>
							</SectionTitle>
							<div className="row">
								<Button variant="primary">Primary</Button>
								<Button>Secondary</Button>
								<Chip icon={<CalendarIcon />}>2026년 10월 28일</Chip>
								<Chip icon={<ClockIcon />}>7분 읽기</Chip>
								<Chip variant="accent">12</Chip>
							</div>
						</section>

						<section>
							<SectionTitle action={<a href="#">전체 보기 →</a>}>
								<span id="posts">글 목록</span>
							</SectionTitle>
							<PostList
								items={[
									{
										href: '#',
										title: '우아콘 2026 참관기',
										description: '우아한형제들 기술 컨퍼런스에서 들은 7개 세션의 내용과 그에 대한 제 생각을 정리했습니다.',
										meta: ['2026년 10월 28일', '7분 읽기'],
									},
									{
										href: '#',
										title: '블로그를 시작합니다',
										description: 'Astro와 GitHub Pages로 만든 블로그의 첫 글',
										meta: ['2026년 10월 28일', '1분 읽기'],
									},
								]}
							/>
						</section>

						<section>
							<Toc items={toc} variant="inline" className="toc-inline" />
							<Prose>
								<h2 id="prose">본문 스타일</h2>
								<p>
									마크다운에서 나온 HTML을 <code>&lt;Prose&gt;</code>로 감싸면 제목, <a href="#">링크</a>,{' '}
									<strong>강조</strong>, 목록, 표, 인용문, 코드 블록이 모두 디자인 시스템 스타일로 바뀝니다.
								</p>
								<ol>
									<li>토큰은 CSS 변수라서 어떤 프레임워크에서도 쓸 수 있습니다.</li>
									<li>컴포넌트는 React로 만들어 Astro와 Next.js에서 모두 씁니다.</li>
								</ol>
								<h3 id="prose-table">표와 인용문</h3>
								<table>
									<thead>
										<tr>
											<th>층</th>
											<th>설명</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>토큰</td>
											<td>색, 글꼴, 간격 같은 CSS 변수</td>
										</tr>
										<tr>
											<td>컴포넌트</td>
											<td>토큰 위에 만든 React 컴포넌트</td>
										</tr>
									</tbody>
								</table>
								<blockquote>
									<p>포인트 색은 --sd-accent, --sd-accent-2 두 값만 바꾸면 전체에 적용됩니다.</p>
								</blockquote>
								<pre>
									<code>{`import 'shindonghyeo-ui/styles.css';\nimport { Button } from 'shindonghyeo-ui';`}</code>
								</pre>
							</Prose>
						</section>
					</div>
					<Toc items={toc} className="toc-sidebar" />
				</div>
			</Container>

			<Footer
				brand={
					<>
						<Logo size={26} />
						shindonghyeo-ui
					</>
				}
				description="신동혁의 개인 React 디자인 시스템"
				links={[
					{ href: '#', label: '컴포넌트' },
					{ href: 'https://github.com/SHINDongHyeo/shindonghyeo-ui', label: 'GitHub', external: true },
				]}
				copyright="© 2026 신동혁"
			/>
		</>
	);
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
