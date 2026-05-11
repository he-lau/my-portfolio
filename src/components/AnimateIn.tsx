"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const variants: Variants = {
  hidden: (dir: string) => ({
    opacity: 0,
    y: dir === "up" ? 30 : 0,
    x: dir === "left" ? -30 : dir === "right" ? 30 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  return (
    <motion.div
      className={className}
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
