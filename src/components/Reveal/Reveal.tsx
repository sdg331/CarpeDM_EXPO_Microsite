import { useEffect, useRef, type ReactNode } from 'react';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || element.getBoundingClientRect().top < window.innerHeight) return;

    let observer: IntersectionObserver | undefined;
    const show = () => {
      delete element.dataset.reveal;
      observer?.disconnect();
    };

    // Start with visible content. Only opt in after observer setup succeeds.
    try {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show();
      }, { threshold: 0, rootMargin: '0px 0px 24px 0px' });
      observer.observe(element);
      element.dataset.reveal = 'pending';
    } catch {
      show();
    }

    const onMotionChange = () => { if (motion.matches) show(); };
    motion.addEventListener('change', onMotionChange);
    element.addEventListener('focusin', show);
    return () => {
      show();
      motion.removeEventListener('change', onMotionChange);
      element.removeEventListener('focusin', show);
    };
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
