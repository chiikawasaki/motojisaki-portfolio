"use client";

import React from "react";
import { motion } from "motion/react";
import { cherryBombOne } from "../fonts";

type TitleFontProps = {
  title: string;
};

const TitleFont: React.FC<TitleFontProps> = ({ title }) => {
  return (
    <h1
      className={cherryBombOne.className}
      style={{
        color: "#EC4899",
        fontSize: "clamp(2.5rem, 9vw, 100px)",
      }}
    >
      {title.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -80, rotate: -270 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            type: "spring",
            bounce: 0.5,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default TitleFont;
