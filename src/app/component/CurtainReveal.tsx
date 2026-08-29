"use client";

import { useEffect, useState } from "react";

const CurtainReveal = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
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
