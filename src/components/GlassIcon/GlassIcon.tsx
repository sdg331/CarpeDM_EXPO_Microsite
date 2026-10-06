import { useId } from 'react';
import './GlassIcon.css';

export type GlassIconKind = 'card' | 'mirror' | 'voice';

// Original vector artwork. Decorative: each icon is paired with a text heading.
export function GlassIcon({ kind }: { kind: GlassIconKind }) {
  const id = useId();
  const colors = { card: ['#2c78f6', '#b1d5ff'], mirror: ['#13a397', '#b3ece4'], voice: ['#8962db', '#d9caff'] }[kind];
  return (
    <svg className="glass-icon" viewBox="0 0 160 144" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-color`} x1="30" y1="20" x2="123" y2="132" gradientUnits="userSpaceOnUse">
          <stop stopColor={colors[1]} /><stop offset="1" stopColor={colors[0]} />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="25" y1="33" x2="122" y2="133" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity=".85" /><stop offset=".42" stopColor="white" stopOpacity=".42" /><stop offset="1" stopColor={colors[1]} stopOpacity=".65" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="35" y1="22" x2="123" y2="126" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset=".5" stopColor="white" stopOpacity=".85" /><stop offset="1" stopColor={colors[0]} stopOpacity=".2" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-40%" y="-40%" width="190%" height="200%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor={colors[0]} floodOpacity=".17" />
        </filter>
      </defs>
      <g filter={`url(#${id}-shadow)`}>
        {kind === 'card' && <>
          <rect x="46" y="22" width="94" height="72" rx="16" transform="rotate(12 46 22)" fill={`url(#${id}-color)`} />
          <rect x="21" y="48" width="111" height="76" rx="17" transform="rotate(-8 21 48)" fill={`url(#${id}-glass)`} stroke={`url(#${id}-edge)`} strokeWidth="1.5" />
          <g transform="rotate(-8 21 48)"><circle cx="49" cy="76" r="10" fill="white" fillOpacity=".94" /><path d="M34 100c0-8 6-13 15-13s15 5 15 13" fill="white" fillOpacity=".94" /><path d="M80 72h31M80 84h21M80 100h29" stroke="white" strokeWidth="5" strokeLinecap="round" /></g>
        </>}
        {kind === 'mirror' && <>
          <rect x="63" y="18" width="61" height="103" rx="16" transform="rotate(12 63 18)" fill={`url(#${id}-color)`} />
          <rect x="36" y="22" width="66" height="106" rx="17" transform="rotate(-8 36 22)" fill={`url(#${id}-glass)`} stroke={`url(#${id}-edge)`} strokeWidth="1.5" />
          <g transform="rotate(-8 36 22)"><rect x="44" y="32" width="50" height="83" rx="11" stroke="white" strokeWidth="1.5" strokeOpacity=".85" /><circle cx="69" cy="39" r="2" fill="white" /><path d="m53 75 26-28M53 91l30-33" stroke="white" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" /><path d="M59 122h20" stroke="white" strokeWidth="3" strokeLinecap="round" /></g>
        </>}
        {kind === 'voice' && <>
          <path d="M70 24h47a17 17 0 0 1 17 17v36a17 17 0 0 1-17 17h-5l-14 13V94H70a17 17 0 0 1-17-17V41a17 17 0 0 1 17-17Z" fill={`url(#${id}-color)`} transform="rotate(9 93 63)" />
          <path d="M34 49h66a18 18 0 0 1 18 18v35a18 18 0 0 1-18 18H60l-18 12v-12h-8a18 18 0 0 1-18-18V67a18 18 0 0 1 18-18Z" fill={`url(#${id}-glass)`} stroke={`url(#${id}-edge)`} strokeWidth="1.5" transform="rotate(-7 67 90)" />
          <path d="M39 81v9m13-19v29m13-39v46m13-33v24m13-17v10" stroke="white" strokeWidth="5" strokeLinecap="round" transform="rotate(-7 67 90)" />
        </>}
      </g>
    </svg>
  );
}
