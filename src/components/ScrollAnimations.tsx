"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait a frame so the new page's DOM is fully rendered
    const raf = requestAnimationFrame(() => {
      const scrollElements = document.querySelectorAll(".animate-on-scroll:not(.is-visible)");
      if (!scrollElements.length) return;

      const scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              scrollObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      scrollElements.forEach((el) => scrollObserver.observe(el));

      cleanup = () => scrollObserver.disconnect();
    });

    let cleanup: (() => void) | undefined;

    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
