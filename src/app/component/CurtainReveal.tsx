"use client";

import { useEffect, useState } from "react";

const CurtainReveal = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // globals.css の curtainOpen（delay 0.6s + duration 1.6s）が終わってから外す
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="curtain-reveal" aria-hidden="true">
      <div className="curtain-reveal__left" />
      <div className="curtain-reveal__right" />
    </div>
  );
};

export default CurtainReveal;
