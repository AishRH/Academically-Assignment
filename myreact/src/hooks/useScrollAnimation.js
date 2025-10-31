import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useScrollAnimation(cardCount = 3) {
  const ref = useRef(null);

  // Track section scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Define transforms safely at top level (no hooks in loops)
  const moveUp0 = useTransform(scrollYProgress, [0.0, 0.25], [0, -750]);
  const scale0  = useTransform(scrollYProgress, [0.0, 0.25], [0.9, 1]);

  const moveUp1 = useTransform(scrollYProgress, [0.25, 0.5], [0, -750]);
  const scale1  = useTransform(scrollYProgress, [0.25, 0.5], [0.85, 1]);

  const moveUp2 = useTransform(scrollYProgress, [0.5, 0.75], [0, -750]);
  const scale2  = useTransform(scrollYProgress, [0.5, 0.75], [0.8, 1]);

  const transforms = [
    { moveUp: moveUp0, scale: scale0 },
    { moveUp: moveUp1, scale: scale1 },
    { moveUp: moveUp2, scale: scale2 },
  ].slice(0, Math.max(0, Math.min(3, cardCount)));

  // Other transforms
  const badgeY = useTransform(scrollYProgress, [0.5, 0.65], [120, 280]);
  const textY = useTransform(scrollYProgress, [0.55, 0.7], [50, 0]);

  return { ref, transforms, badgeY, textY };
}
