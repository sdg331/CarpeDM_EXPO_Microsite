import { useEffect, useRef } from 'react';
import { assemblyPose, assemblyRenderState, scrollProgress } from './motion';

export function useAssemblyScroll(failed: boolean, ready: boolean) {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = section.current;
    const sticky = root?.querySelector<HTMLElement>('.hardware-assembly__sticky');
    if (!root || !sticky) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    function update() {
      frame = 0;
      if (!root || !sticky || document.hidden) return;
      const compact = reduce.matches || failed;
      root.dataset.motion = compact ? 'static' : 'scroll';
      const complete = root.querySelector<HTMLImageElement>('.hardware-assembly__complete');
      const rendered = assemblyRenderState(failed, ready, compact, Boolean(complete?.naturalWidth));
      root.dataset.render = rendered;
      root.querySelector('.hardware-assembly__stage')?.setAttribute('aria-busy', String(rendered === 'loading'));
      const bounds = root.getBoundingClientRect();
      if (!compact && (bounds.bottom < 0 || bounds.top > window.innerHeight)) return;
      const header = parseFloat(getComputedStyle(sticky).top) || 0;
      const progress = compact ? 1 : scrollProgress(bounds.top, root.offsetHeight, sticky.offsetHeight, header);
      const pose = assemblyPose(progress);
      root.dataset.phase = String(pose.phase);
      root.dataset.progress = progress.toFixed(3);
      root.style.setProperty('--panels', String(pose.panels));
      root.style.setProperty('--glass', String(pose.glass));
      root.style.setProperty('--finish', String(pose.finish));
      root.style.setProperty('--progress', String(progress));
    }
    function requestUpdate() { if (!frame) frame = requestAnimationFrame(update); }
    const resize = new ResizeObserver(requestUpdate);
    resize.observe(sticky);
    root.addEventListener('load', requestUpdate, true);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    document.addEventListener('visibilitychange', requestUpdate);
    reduce.addEventListener('change', requestUpdate);
    requestUpdate();
    return () => {
      cancelAnimationFrame(frame); resize.disconnect();
      root.removeEventListener('load', requestUpdate, true);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      document.removeEventListener('visibilitychange', requestUpdate);
      reduce.removeEventListener('change', requestUpdate);
    };
  }, [failed, ready]);
  return section;
}
