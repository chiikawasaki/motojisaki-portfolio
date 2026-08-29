import { useEffect } from "react";

type SavedBodyStyle = {
  position: string;
  top: string;
  left: string;
  right: string;
  width: string;
};

// モーダルが複数箇所にあっても、片方の解除でもう片方のロックが外れないよう参照数で管理する
let lockCount = 0;
let savedScrollY = 0;
let savedStyle: SavedBodyStyle | null = null;

const lockBody = () => {
  lockCount += 1;
  if (lockCount > 1) return;

  const { body } = document;
  savedScrollY = window.scrollY;
  savedStyle = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
  };

  // iOS Safari では overflow: hidden だけでは背面がスクロールするため position: fixed で固定する
  body.style.position = "fixed";
  body.style.top = `-${savedScrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
};

const unlockBody = () => {
  lockCount = Math.max(lockCount - 1, 0);
  if (lockCount > 0 || !savedStyle) return;

  const { body } = document;
  body.style.position = savedStyle.position;
  body.style.top = savedStyle.top;
  body.style.left = savedStyle.left;
  body.style.right = savedStyle.right;
  body.style.width = savedStyle.width;
  savedStyle = null;
  window.scrollTo(0, savedScrollY);
};

/**
 * locked が true の間、背面のスクロールを止める。
 * スクロールバー幅の補正は globals.css の scrollbar-gutter: stable が担当する。
 */
export const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;

    lockBody();
    return unlockBody;
  }, [locked]);
};
