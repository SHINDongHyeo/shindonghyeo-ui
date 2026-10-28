import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function strokeProps({ size = 18, ...props }: IconProps) {
	return {
		width: size,
		height: size,
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: 1.8,
		strokeLinecap: 'round' as const,
		strokeLinejoin: 'round' as const,
		'aria-hidden': true,
		...props,
	};
}

export function SunIcon(props: IconProps) {
	return (
		<svg {...strokeProps(props)}>
			<circle cx="12" cy="12" r="4.5" />
			<path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
		</svg>
	);
}

export function MoonIcon(props: IconProps) {
	return (
		<svg {...strokeProps(props)}>
			<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
		</svg>
	);
}

export function CalendarIcon(props: IconProps) {
	return (
		<svg {...strokeProps({ size: 15, ...props })}>
			<rect x="3.5" y="5" width="17" height="15" rx="2.5" />
			<path d="M3.5 10h17M8 3v4M16 3v4" />
		</svg>
	);
}

export function ClockIcon(props: IconProps) {
	return (
		<svg {...strokeProps({ size: 15, ...props })}>
			<circle cx="12" cy="12" r="8.5" />
			<path d="M12 7.5V12l3 2" />
		</svg>
	);
}

export function GitHubIcon({ size = 18, ...props }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" {...props}>
			<path
				fill="currentColor"
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
			/>
		</svg>
	);
}
