import { useEffect, useRef } from "react";

const useHorizontalScroll = (scrollSpeed: number = 1) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAnimationFrameId: number;
    let direction = 1; // 1 for right, -1 for left

    const animateScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth; // 計算滾動的最大值
      const currentScrollLeft = container.scrollLeft; // 當前滾動位置

      container.scrollLeft += scrollSpeed * direction;

      if (direction === 1 && currentScrollLeft >= maxScrollLeft) {
        direction = -1; // Change direction to left
      } else if (direction === -1 && currentScrollLeft <= 0) {
        direction = 1; // Change direction to right
      }

      scrollAnimationFrameId = requestAnimationFrame(animateScroll);
    };

    const startScrolling = () => {
      scrollAnimationFrameId = requestAnimationFrame(animateScroll);
    };

    startScrolling();

    return () => {
      if (scrollAnimationFrameId) {
        cancelAnimationFrame(scrollAnimationFrameId);
      }
    };
  }, [scrollSpeed]);

  return { containerRef };
};

export default useHorizontalScroll;
