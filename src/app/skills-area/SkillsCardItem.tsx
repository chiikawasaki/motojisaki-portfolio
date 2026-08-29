"use client";

import Image from "next/image";
import { motion } from "motion/react";

type SkillsCardItemProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  index?: number;
};

const SkillsCardItem = ({
  src,
  alt,
  width,
  height,
  title,
  index = 0,
}: SkillsCardItemProps) => {
  return (
    <motion.div
      className="card bg-base-100 shadow-sm border-none items-center justify-center w-full max-w-[300px] aspect-square mx-auto"
      initial={{ opacity: 0, x: -60, y: -60, scale: 0.6 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 260,
        delay: index * 0.05,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: "10px" }}
      />
      <p className="text-center mt-4">{title}</p>
    </motion.div>
  );
};

export default SkillsCardItem;
