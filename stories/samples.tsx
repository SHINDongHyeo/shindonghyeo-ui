// 여러 스토리에서 함께 쓰는 예시 데이터
export const samplePosts = [
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
	{
		href: '#',
		title: 'React 디자인 시스템 만들기',
		description: '블로그 디자인을 토큰과 컴포넌트로 정리해 npm에 배포하기까지',
		meta: ['2026년 10월 28일', '5분 읽기'],
	},
];

export const sampleToc = [
	{ id: 'intro', text: '들어가며', depth: 2 },
	{ id: 'tokens', text: '토큰 정리하기', depth: 2 },
	{ id: 'tokens-color', text: '색', depth: 3 },
	{ id: 'components', text: '컴포넌트 옮기기', depth: 2 },
	{ id: 'outro', text: '마치며', depth: 2 },
];

const paragraph =
	'디자인 시스템은 색과 글꼴 같은 토큰에서 시작합니다. 토큰을 CSS 변수로 두면 어떤 프레임워크에서도 같은 값을 쓸 수 있고, 그 위에 React 컴포넌트를 얹으면 여러 사이트가 같은 모양을 공유할 수 있습니다.';

export function SampleArticle() {
	return (
		<>
			{sampleToc.map((item) =>
				item.depth === 2 ? (
					<section key={item.id}>
						<h2 id={item.id}>{item.text}</h2>
						<p>{paragraph}</p>
						<p>{paragraph}</p>
					</section>
				) : (
					<section key={item.id}>
						<h3 id={item.id}>{item.text}</h3>
						<p>{paragraph}</p>
					</section>
				),
			)}
		</>
	);
}
