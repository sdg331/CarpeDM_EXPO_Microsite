import { useId } from 'react';
import './GlassIcon.css';

export type GlassIconKind = 'Response' | 'Voice' | 'Expression' | 'Posture';

const silhouettes = {
  Response: 'M65 42h88a17 17 0 0 1 17 17v63a17 17 0 0 1-17 17h-14v21l-27-21H65a17 17 0 0 1-17-17V59a17 17 0 0 1 17-17ZM45 61h80a17 17 0 0 1 17 17v48a17 17 0 0 1-17 17H81l-27 21v-21h-9a17 17 0 0 1-17-17V78a17 17 0 0 1 17-17Z',
  Voice: 'M36 85a7 7 0 0 1 14 0v30a7 7 0 0 1-14 0ZM62 66a7 7 0 0 1 14 0v68a7 7 0 0 1-14 0ZM88 38a12 12 0 0 1 24 0v124a12 12 0 0 1-24 0ZM124 66a7 7 0 0 1 14 0v68a7 7 0 0 1-14 0ZM150 85a7 7 0 0 1 14 0v30a7 7 0 0 1-14 0Z',
  Expression: 'M172 100a72 72 0 1 1-144 0 72 72 0 0 1 144 0Z',
  Posture: 'M121 57a21 21 0 1 1-42 0 21 21 0 0 1 42 0ZM52 170v-29c0-24 17-42 40-42h16c23 0 40 18 40 42v29Z',
} as const;

// Original decorative vectors share one material, camera plane and optical size.
export function GlassIcon({ kind }: { kind: GlassIconKind }) {
  const id = useId();
  return <svg className="glass-icon" viewBox="0 0 200 200" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`${id}-glass`} x1="36" y1="28" x2="162" y2="178" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f6f8fb" stopOpacity=".48" /><stop offset=".45" stopColor="#a8b2bf" stopOpacity=".12" /><stop offset="1" stopColor="#ced6e0" stopOpacity=".3" />
      </linearGradient>
      <linearGradient id={`${id}-edge`} x1="40" y1="30" x2="158" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" /><stop offset=".38" stopColor="#b5bfcc" /><stop offset=".65" stopColor="#626f80" /><stop offset="1" stopColor="#e8edf3" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-25%" y="-25%" width="160%" height="165%" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#080c12" floodOpacity=".18" />
      </filter>
    </defs>
    <g filter={`url(#${id}-shadow)`}>
      <path d={silhouettes[kind]} transform="translate(3 4)" fill="#8592a3" fillOpacity=".12" stroke="#8793a3" strokeOpacity=".5" strokeWidth="2" />
      <path d={silhouettes[kind]} fill={`url(#${id}-glass)`} stroke={`url(#${id}-edge)`} strokeWidth="2" strokeLinejoin="round" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {kind === 'Response' && <path d="M52 91h63M52 109h43" />}
        {kind === 'Voice' && <path d="M99 45v110" strokeOpacity=".55" strokeWidth="1.5" />}
        {kind === 'Expression' && <><path d="M67 83h9M124 83h9M72 116c14 19 42 19 56 0" /><path d="M44 68a61 61 0 0 1 51-29" stroke="#fff" strokeOpacity=".6" strokeWidth="1.5" /></>}
        {kind === 'Posture' && <><path d="M78 130v40M122 130v40M100 109v46" /><path d="M35 183h130" strokeOpacity=".55" strokeWidth="1.5" /></>}
      </g>
    </g>
  </svg>;
}
