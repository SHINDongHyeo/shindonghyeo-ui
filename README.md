# shindonghyeo-ui

신동혁의 개인 React 디자인 시스템입니다. [개발 블로그](https://shindonghyeo.github.io)의 디자인을 다른 React 사이트에서도 쓸 수 있게 토큰과 컴포넌트로 정리했습니다.

- **디자인 토큰:** 색, 글꼴, 모서리 둥글기, 레이아웃 폭을 CSS 변수(`--sd-*`)로 정의하고, 라이트/다크 모드를 지원합니다.
- **React 컴포넌트:** CSS Modules로 스타일을 입혀서 런타임 비용이 없고, Next.js·Astro·Vite 어디서나 동작합니다.
- **서버 렌더링 대응:** 상호작용이 필요한 컴포넌트(`ThemeToggle`, `Toc`, `ReadingProgress`)에만 `'use client'`가 붙어 있습니다.

## 설치

```bash
npm install github:SHINDongHyeo/shindonghyeo-ui
```

## 사용법

스타일 파일은 앱 진입점에서 **한 번만** 불러옵니다.

```tsx
import 'shindonghyeo-ui/styles.css';
import { Banner, Button, GradientText } from 'shindonghyeo-ui';

export function Hero() {
	return (
		<Banner eyebrow="Dev Log" title={<>안녕하세요, <GradientText>신동혁</GradientText>입니다.</>}>
			<Button variant="primary" href="/blog">글 둘러보기 →</Button>
		</Banner>
	);
}
```

글꼴은 [Pretendard](https://github.com/orioncactus/pretendard)를 쓰도록 지정되어 있습니다. 사이트의 `<head>`에 Pretendard를 불러와 주세요.

```html
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
/>
```

### 다크 모드

테마는 `<html data-theme="light|dark">`로 바뀝니다. 첫 화면에서 깜빡이지 않도록 `<head>`에 `themeInitScript`를 인라인으로 넣어 주세요.

```tsx
import { themeInitScript } from 'shindonghyeo-ui';

<head>
	<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
</head>
```

### Astro에서 쓰기

`@astrojs/react`를 추가하면 `.astro` 파일에서 바로 쓸 수 있습니다. 기본적으로 HTML로만 렌더링되고, 클릭이나 스크롤에 반응해야 하는 컴포넌트에만 `client:*` 지시문을 붙이면 됩니다.

```astro
---
import { Banner, ThemeToggle, Toc } from 'shindonghyeo-ui';
---
<Banner title="모든 글" />
<ThemeToggle client:load />
<Toc items={items} client:idle />
```

### Next.js에서 쓰기

링크를 그리는 컴포넌트(`Navbar`, `PostList`, `Footer`)는 `linkAs`로 `next/link`의 `Link`를 받을 수 있습니다.

```tsx
import Link from 'next/link';

<PostList items={posts} linkAs={Link} />
```

## 컴포넌트

| 컴포넌트 | 설명 |
| --- | --- |
| `Container` | 본문 폭(680px) 또는 넓은 폭(`wide`, 980px)으로 내용을 가운데 정렬 |
| `Navbar` | 화면 위에 붙어 있는 반투명 메뉴바. 현재 메뉴는 알약 모양으로 강조 |
| `Banner` | 그라데이션과 점 패턴 배경의 페이지 상단 배너 |
| `Logo` | 그라데이션 정사각형 로고 마크 |
| `Button` | `primary`(그라데이션) / `secondary` 버튼. `href`가 있으면 링크로 렌더링 |
| `IconButton` | 아이콘만 있는 버튼 |
| `Chip` | 날짜, 읽는 시간 같은 작은 정보 표시 |
| `GradientText` | 그라데이션 글자 |
| `SectionTitle` | 왼쪽에 그라데이션 막대가 붙은 섹션 제목 |
| `PostList` | 마우스를 올리면 카드처럼 떠오르는 글 목록 |
| `Prose` | 마크다운에서 나온 HTML(제목, 목록, 표, 인용문, 코드)을 꾸미는 본문 영역 |
| `Toc` | 현재 읽는 제목을 강조하는 목차 (`sidebar` / `inline`) |
| `ReadingProgress` | 스크롤한 만큼 차오르는 진행 바 |
| `ThemeToggle` | 라이트/다크 모드 전환 버튼 |
| `Footer` | 브랜드, 링크, 저작권, "맨 위로"가 있는 푸터 |

아이콘(`SunIcon`, `MoonIcon`, `GitHubIcon`, `CalendarIcon`, `ClockIcon`)도 함께 내보냅니다.

## 테마 바꾸기

포인트 색은 두 값만 덮어쓰면 그라데이션, 강조색, 옅은 배경색까지 모두 따라 바뀝니다.

```css
:root {
	--sd-accent: #7c3aed;
	--sd-accent-2: #db2777;
}
:root[data-theme='dark'] {
	--sd-accent: #a78bfa;
	--sd-accent-2: #f472b6;
}
```

전체 토큰 목록은 [`src/styles/tokens.css`](src/styles/tokens.css)에 있습니다.

## 개발

```bash
npm install
npm run dev        # 플레이그라운드(playground/)에서 컴포넌트 확인
npm run typecheck
npm run build      # dist/에 JS, 타입, styles.css 생성
```

## 라이선스

MIT
