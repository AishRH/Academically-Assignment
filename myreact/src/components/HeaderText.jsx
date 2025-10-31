// src/components/Shared/HeaderText.jsx
import { motion } from "framer-motion";

export default function HeaderText({ y }) {
  return (
    <motion.p
      style={{ y }}
      className="max-w-[90%] sm:max-w-2xl md:max-w-3xl text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0d1b45] leading-snug mt-4"
    >
      “The first time I used
     Speak Tutor, I couldn’t
      believe it wasn’t a real person. It feels like it understands my
      motivations at a deep level.”
    </motion.p>
  );
}
