import { type RefObject, useEffect, useState } from "react";

type UseSectionScrollProgressOptions = {
  startViewportRatio?: number;
  endViewportRatio?: number;
  threshold?: number;
};

export function useSectionScrollProgress(
  targetRef: RefObject<HTMLElement | null>,
  {
    startViewportRatio = 0.98,
    endViewportRatio = 0.32,
    threshold = 0.003,
  }: UseSectionScrollProgressOptions = {},
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;

      if (!targetRef.current) {
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const sectionRect = targetRef.current.getBoundingClientRect();
      const start = viewportHeight * startViewportRatio;
      const end = viewportHeight * endViewportRatio;
      const rawProgress = (start - sectionRect.top) / (start - end);
      const nextProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress((current) => (Math.abs(current - nextProgress) < threshold ? current : nextProgress));
    };

    const requestUpdate = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [endViewportRatio, startViewportRatio, targetRef, threshold]);

  return progress;
}
