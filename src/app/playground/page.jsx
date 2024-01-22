"use client";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const photos = [
    {
      src: "./assets/salwaw_broco.jpeg",
    },
    {
      src: "./assets/salwaw_meng.jpg",
    },
    {
      src: "./assets/salwaw_selca.jpeg",
    },
    {
      src: "./assets/salwaw_selca2.jpeg",
    },
    {
      src: "./assets/salwaw_meng.jpg",
    },
    {
      src: "./assets/salwaw_broco.jpeg",
    },
    {
      src: "./assets/salwaw_selca2.jpeg",
    },
    {
      src: "./assets/salwaw_selca.jpeg",
    },
    {
      src: "./assets/salwaw_broco.jpeg",
    },
    {
      src: "./assets/salwaw_selca2.jpeg",
    },
    {
      src: "./assets/salwaw_meng.jpg",
    },
    {
      src: "./assets/salwaw_selca.jpeg",
    },
  ];

  const bounceConfig = {
    type: "spring",
    stiffness: 400,
    damping: 20,
  };

  return (
    <div className="bg-[#8BD3E6]">
      <div className="w-full flex items-center bg-[#8BD3E6] text-gray-900 md:py-2 py-4 border-b">
        <marquee className="md:text-2xl text-xl tracking-tight">
          Happy Birthday SALWA FAUZUL MUNA
        </marquee>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-3 w-full px-8 gap-2">
        {photos.map((photo, key) => (
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 100 }}
            whileTap={{ scale: 0.9 }}
            whileDrag={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ bounce: bounceConfig, duration: 0.5 }}
            className="self-start justify-self-center p-2 w-32 md:w-40 xl:w-44 ring ring-stone-200 ring-opacity-25 ring-inset rounded-2xl aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm cursor-grab hover:active:cursor-grabbing"
            key={key}
          >
            <img
              className="object-cover w-full bg-white rounded-lg pointer-events-none aspect-square"
              src={photo.src}
            />
          </motion.div>
        ))}
      </div>
      <div className="py-4 flex justify-center">
        <Link className="bg-gray-300 py-2 px-4 rounded-lg" href="/">
          Kembaliii :)
        </Link>
      </div>
    </div>
  );
};

export default Page;
