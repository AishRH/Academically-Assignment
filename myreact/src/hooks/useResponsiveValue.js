import { useState, useEffect } from "react";

export function useResponsiveValue(values) {
  const [width, setWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1024));

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if(width<400) return values.xs;
  if (width < 640) return values.sm;     // mobile
  if (width < 1024) return values.md;    // tablet
  return values.lg;                      // desktop
}
