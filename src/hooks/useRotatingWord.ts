"use client";

import { useState, useEffect, useRef } from "react";

export function useRotatingWord(words: string[], interval = 2500) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIsFadingOut(true);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsFadingOut(false);
      }, 400);
    }, interval);

    return () => {
      clearInterval(id);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words.length, interval]);

  return { word: words[currentIndex], isFadingOut };
}
