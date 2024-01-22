"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [imageBackground, setImageBackground] = useState("");

  useEffect(() => {
    setImageBackground("./assets/salwaw_selca.jpeg");
  }, []);
  const changePhotos1 = () => {
    setImageBackground("./assets/salwaw_meng.jpg");
  };
  const changePhotos2 = () => {
    setImageBackground("./assets/salwaw_broco.jpeg");
  };
  const changePhotos3 = () => {
    setImageBackground("./assets/salwaw_selca.jpeg");
  };

  const changePhotos4 = () => {
    setImageBackground("./assets/salwaw_selca2.jpeg");
  };
  return (
    <div className="min-h-screen bg-[#8BD3E6]">
      <div className="w-full flex items-center bg-[#8BD3E6] text-gray-900 md:py-2 py-4 border-b">
        <marquee className="md:text-2xl text-xl tracking-tight">
          Happy Birthday SALWA FAUZUL MUNA
        </marquee>
      </div>
      <div className="py-2 px-4 flex flex-col items-center w-full">
        <div className="grid md:grid-cols-2 gap-8 w-full grid-cols-1 items-center">
          <div classname="w-full">
            <img
              className="object-cover w-fit bg-white rounded-lg pointer-events-none aspect-square"
              src={imageBackground}
            />
          </div>
          <div className="w-full flex justify-center items-center h-full flex-col p-8 gap-8">
            <h1 className="text-3xl text-center">
              Its Your 20th Birthday Wish u All The Best. xoxo
            </h1>
            <div className="flex items-center gap-x-4">
              <button
                onClick={changePhotos1}
                className="p-6 rounded-full bg-gray-400 border border-black"
              ></button>
              <button
                onClick={changePhotos2}
                className="p-6 rounded-full bg-yellow-400 border border-black"
              ></button>
              <button
                onClick={changePhotos3}
                className="p-6 rounded-full bg-violet-400 border border-black"
              ></button>
              <button
                onClick={changePhotos4}
                className="p-6 rounded-full bg-red-400 border border-black"
              ></button>
            </div>
            <div className="py-4 flex justify-center">
              <Link
                className="bg-gray-300 py-2 px-4 rounded-lg"
                href="/playground"
              >
                Sini sinii :)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
