import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

// Components
import OuterCard from "./components/OuterCard";
import CardOne from "./components/rightSection/OneRight";
import CardTwo from "./components/rightSection/TwoRight";
import CardThree from "./components/rightSection/ThreeRight";
import One from "./components/leftSection/OneLeft";
import Two from "./components/leftSection/TwoLeft";
import Three from "./components/leftSection/ThreeLeft";
import ProfileBadge from "./components/ProfileBadge";
import HeaderText from "./components/HeaderText";

// Hooks
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useResponsiveValue } from "./hooks/useResponsiveValue";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  // Custom scroll animation hook
  const { ref, transforms, badgeY, textY } = useScrollAnimation(3);

  // Card components (left and right sections)
  const CardComponentsRight = useMemo(() => [CardOne, CardTwo, CardThree], []);
  const CardComponentsLeft = useMemo(() => [One, Two, Three], []);
  const zIndexes = useMemo(() => ["z-20", "z-10", "z-0"], []);

  // Viewport height for responsive translation values
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive vertical offset factors
  const translateYBaseFactor = useResponsiveValue({
    sm: 0.06,
    md: 0.06,
    lg: 0.06,
  });

  const lastCardOffsetFactor = useResponsiveValue({
    sm: 0.28,
    md: 0.30,
    lg: 0.30,
  });

  const translateYBase = Math.round(viewportHeight * translateYBaseFactor);
  const lastCardOffset = Math.round(viewportHeight * lastCardOffsetFactor);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#f5f7ff] min-h-[120vh] overflow-hidden"
      aria-label="Sticky layered cards section"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center perspective-[1200px]">
        {CardComponentsRight.map((RightCard, i) => {
          const LeftCard = CardComponentsLeft[i];
          return (
            <motion.div
              key={`card-${i + 1}`}
              style={{
                y: prefersReducedMotion ? 0 : transforms[i].moveUp,
                scale: prefersReducedMotion ? 1 : transforms[i].scale,
                transformStyle: "preserve-3d",
              }}
              className={`absolute w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] ${zIndexes[i]} transform-gpu`}
            >
              {/* Card positioning */}
              <div
                className="transition-all duration-700"
                style={
                  i === CardComponentsRight.length - 1
                    ? { transform: `translateY(${lastCardOffset}px)` }
                    : { transform: `translateY(${i * translateYBase}px)` }
                }
              >
                {/* Outer Card with both sides */}
                <OuterCard
                  leftContent={<LeftCard />}
                  rightContent={<RightCard />}
                />

                {/* Badge + text only on the last card */}
                {i === CardComponentsRight.length - 1 && (
                  <motion.div
                    className="flex flex-col items-center gap-8 text-center mt-10 px-4"
                    style={{ y: prefersReducedMotion ? 0 : badgeY }}
                  >
                    <ProfileBadge />
                    <HeaderText y={prefersReducedMotion ? 0 : textY} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
