import type { Meta, StoryObj } from '@storybook/react-vite';

const colors = [
	['--sd-accent', '포인트 색'],
	['--sd-accent-2', '보조 포인트 색 (그라데이션 끝)'],
	['--sd-gradient', '포인트 그라데이션'],
	['--sd-accent-soft', '옅은 포인트 배경'],
	['--sd-text-strong', '제목 글자'],
	['--sd-text', '본문 글자'],
	['--sd-text-muted', '보조 글자'],
	['--sd-bg', '페이지 배경'],
	['--sd-bg-subtle', '배너, 푸터, 표 머리 배경'],
	['--sd-bg-elevated', '카드, 버튼 배경'],
	['--sd-border', '테두리'],
	['--sd-code-bg', '인라인 코드 배경'],
];

const radii = ['--sd-radius-sm', '--sd-radius-md', '--sd-radius-lg', '--sd-radius-full'];

const typeScale = [
	['2.6rem', '홈 배너 제목'],
	['2.4rem', '배너 제목'],
	['1.5rem', '본문 h2'],
	['1.22rem', '본문 h3, 글 목록 제목'],
	['17px', '본문'],
	['0.84rem', '메타 정보'],
];

function Tokens() {
	return (
		<div style={{ display: 'grid', gap: 48 }}>
			<section>
				<h2 style={{ marginBottom: 16 }}>색</h2>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
					{colors.map(([name, desc]) => (
						<div key={name}>
							<div
								style={{
									height: 64,
									borderRadius: 'var(--sd-radius-md)',
									border: '1px solid var(--sd-border)',
									background: `var(${name})`,
								}}
							/>
							<code style={{ display: 'block', marginTop: 8, fontSize: 13 }}>{name}</code>
							<span style={{ color: 'var(--sd-text-muted)', fontSize: 13 }}>{desc}</span>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 style={{ marginBottom: 16 }}>모서리 둥글기</h2>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
					{radii.map((name) => (
						<div key={name} style={{ textAlign: 'center' }}>
							<div
								style={{
									width: 96,
									height: 64,
									borderRadius: `var(${name})`,
									background: 'var(--sd-accent-soft)',
									border: '1px solid var(--sd-accent)',
								}}
							/>
							<code style={{ display: 'block', marginTop: 8, fontSize: 13 }}>{name}</code>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 style={{ marginBottom: 16 }}>글자 크기</h2>
				<p style={{ margin: '0 0 16px', color: 'var(--sd-text-muted)' }}>
					글꼴은 <code>--sd-font-sans</code>(Pretendard)와 <code>--sd-font-mono</code>를 씁니다.
				</p>
				{typeScale.map(([size, desc]) => (
					<div key={size} style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '8px 0' }}>
						<code style={{ width: 72, flexShrink: 0, fontSize: 13 }}>{size}</code>
						<span style={{ fontSize: size, fontWeight: 700, color: 'var(--sd-text-strong)' }}>{desc}</span>
					</div>
				))}
			</section>
		</div>
	);
}

const meta = {
	title: 'Foundations/Tokens',
	component: Tokens,
	tags: ['!autodocs'],
	parameters: {
		docs: { description: { component: '색, 모서리 둥글기, 글자 크기 토큰. 툴바에서 다크 모드로 바꾸면 다크 값이 보입니다.' } },
	},
} satisfies Meta<typeof Tokens>;

export default meta;

export const Overview: StoryObj<typeof meta> = {};
