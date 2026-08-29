"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { CardData } from "./CardDataList";

type CardItemProps = CardData;

type ExternalLinkProps = {
  href: string;
  label: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label}（新しいタブで開く）`}
    className="text-blue-500 break-all"
  >
    {href}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 inline h-4 w-4 pb-[3px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5h5v5m0-5L10 14m1-9H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"
      />
    </svg>
  </a>
);

const CardItem: React.FC<CardItemProps> = ({
  title,
  picSrc,
  description,
  technologies = [],
  github,
  url,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useBodyScrollLock(isModalOpen);

  return (
    <>
      <motion.div
        className="card bg-base-100 w-full shadow-sm pb-10 cursor-pointer"
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
      >
        <figure className="h-48 w-full relative overflow-hidden">
          <Image
            src={picSrc || "/images/default.png"}
            alt={title}
            fill
            sizes="384px"
            style={{
              objectFit: "cover",
              borderRadius: "10px 10px 0px 0px",
            }}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="flex flex-wrap gap-2 mt-2 ml-5">
          {technologies.map((tech, index) => (
            <div key={index} className="badge badge-soft badge-secondary">
              {tech}
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 sm:p-8 rounded-lg shadow-xl z-[101] max-w-3xl w-[90vw] sm:w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.2, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.2, y: 20 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative w-full h-48 sm:h-96 mb-4">
                <Image
                  src={picSrc || "/images/default.png"}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>

              <div className="prose max-w-none">
                <p>{description || "詳細説明はまだありません。"}</p>
                {github && (
                  <div className="flex items-start gap-2 mt-2">
                    <p className="shrink-0">github:</p>
                    <ExternalLink href={github} label="GitHub" />
                  </div>
                )}
                {url && (
                  <div className="flex items-start gap-2 mt-2">
                    <p className="shrink-0">URL:</p>
                    <ExternalLink href={url} label="作品サイト" />
                  </div>
                )}
                {technologies.length > 0 && (
                  <div className="flex items-center gap-2 mt-4">
                    <p className="font-semibold">使用技術：</p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="badge badge-soft badge-secondary"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 sm:mt-6 flex justify-end">
                <button className="btn btn-secondary" onClick={closeModal}>
                  閉じる
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardItem;
