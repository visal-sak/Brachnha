"use client";

import React ,{useEffect} from "react";
import Lottie from "lottie-react";
import ShowDogAim from "../../app/utils/assets/showdog.json";
import Link from "next/link";
import { Howl } from "howler";

export default function ComparePartternGame({gameCompare}) {
  const compare = gameCompare?.data?.data;
    useEffect(() => {
      const sound = new Howl({
        src: ["/audio/Wood.mp3"],
        loop: true,
        volume: 0.5,
      });

      sound.play();

      return () => {
        sound.unload();
      };
    }, []);
  return (
    <>
      <main class="xl:w-full xl:h-full max-w-5xl rounded-xl backdrop-blur-sm bg-white/50 border-emerald-500 border-2 shadow-sm p-10 lg:p-20 mx-2 text-gray-800 relative md:text-left">
        <img
          src="../../../images/Fishes.png"
          alt="land"
          className="bg-cover bg-no-repeat w-32 md:w-36 lg:w-40 xl:w-64 bg-fixed absolute left-1 -bottom-32 md:-left-10 md:-bottom-32 lg:left-1 lg:-bottom-20 xl:-bottom-32 xl:-left-36 bounce"
        />
        <article class="w-full md:w-1/2 px-5 md:px-10">
          <section class="mb-10">
            <audio
              id="song"
              class="block w-60 h-12 mb-9 border-2 border-emerald-300 rounded-full"
              controls
            >
              <source src={compare?.question?.audios} type="audio/mpeg" />
            </audio>
            <h1 class="font-bold text-md md:text-md lg:text-xl mb-5">
              {compare?.question?.text}
            </h1>
          </section>
        </article>
        <section className="mb-10 grid grid-cols-3 xl:grid-cols-3 gap-6">
          {compare?.answers?.map((item, index) => (
            <Link
              href={
                item?.isCorrect
                  ? `/result/correctAnswer/${gameCompare?.data?.code}`
                  : `/result/incorrectAnswer/${gameCompare?.data?.code}`
              }
              key={index}
              class="col-span-1"
            >
              <img
                src={item?.image}
                alt="football"
                class="w-48 cursor-pointer object-cover"
              />
            </Link>
          ))}
        </section>
        <Lottie
          animationData={ShowDogAim}
          className="right-1 -bottom-32 md:-right-28 lg:-bottom-16 absolute md:-bottom-32 w-40 md:w-48 lg:w-62 xl:w-64 xl:-bottom-36"
        />
      </main>
    </>
  );
}
