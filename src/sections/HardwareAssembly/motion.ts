export const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function assemblyRenderState(failed: boolean, allLoaded: boolean, staticMode: boolean, completeLoaded: boolean) {
  return failed ? 'fallback' : allLoaded || (staticMode && completeLoaded) ? 'ready' : 'loading';
}

export function scrollProgress(top: number, sectionHeight: number, stickyHeight: number, headerHeight: number) {
  return clamp((headerHeight - top) / Math.max(1, sectionHeight - stickyHeight));
}

export function assemblyPose(progress: number) {
  const ease = (start: number, end: number) => {
    const value = clamp((progress - start) / (end - start));
    return value * value * (3 - 2 * value);
  };
  return {
    panels: ease(.1, .4),
    glass: ease(.44, .76),
    // ponytail: generated layers approximate alignment; the final render preserves the finished silhouette.
    finish: ease(.84, .94),
    phase: progress < .44 ? 0 : progress < .84 ? 1 : 2,
  };
}
