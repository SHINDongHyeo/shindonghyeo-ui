import type { Meta, StoryObj } from '@storybook/react-vite';
import { Prose } from '../src';

const meta = {
	title: 'Content/Prose',
	component: Prose,
	parameters: {
		docs: {
			description: {
				component:
					'마크다운에서 나온 HTML을 감싸면 제목, 링크, 목록, 표, 인용문, 코드가 디자인 시스템 스타일로 바뀝니다. Shiki 듀얼 테마 코드 블록도 다크 모드를 따릅니다.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 680, margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	render: () => (
		<Prose>
			<p>
				마크다운 본문은 <code>&lt;Prose&gt;</code>로 감싸기만 하면 됩니다. <a href="#">링크</a>와{' '}
				<strong>강조</strong>도 포인트 색을 따릅니다.
			</p>
			<h2>소제목 h2</h2>
			<p>h2 아래에는 얇은 구분선이 붙습니다.</p>
			<h3>소제목 h3</h3>
			<ul>
				<li>순서 없는 목록의 점은 포인트 색입니다.</li>
				<li>두 번째 항목</li>
			</ul>
			<ol>
				<li>순서 있는 목록의 번호도 포인트 색입니다.</li>
				<li>두 번째 항목</li>
			</ol>
			<blockquote>
				<p>인용문은 옅은 포인트 배경과 왼쪽 막대로 표시됩니다.</p>
			</blockquote>
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
			<pre>
				<code>{`import 'shindonghyeo-ui/styles.css';\nimport { Prose } from 'shindonghyeo-ui';`}</code>
			</pre>
		</Prose>
	),
} satisfies Meta<typeof Prose>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
