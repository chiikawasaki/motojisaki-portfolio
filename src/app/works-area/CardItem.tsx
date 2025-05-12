"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CardData } from "./CardDataList";
import Link from "next/link";

type CardItemProps = CardData;

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

  return (
    <>
      <motion.div
        className="card bg-base-100 w-100 shadow-sm pb-10 cursor-pointer"
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
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl z-[101] max-w-3xl w-full"
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

              <div className="relative w-full h-96 mb-4">
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
                  <div className="flex items-center gap-2 mt-2">
                    <p>github:</p>
                    <Link href={github} className="text-blue-500">
                      {github}
                    </Link>
                  </div>
                )}
                {url && (
                  <div className="flex items-center gap-2 mt-2">
                    <p>URL:</p>
                    <Link href={url} className="text-blue-500">
                      {url}
                    </Link>
                  </div>
                )}
                {technologies.length > 0 && (
                  <>
                    <p className="font-semibold mt-4">使用技術：</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="badge badge-soft badge-secondary"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <button className="btn btn-primary" onClick={closeModal}>
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
