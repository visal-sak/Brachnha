"use client";

import React from "react";
import Lottie from "lottie-react";
import ShowDogAim from "../../app/utils/assets/showdog.json";
import ShowPanda from "../../app/utils/assets/panda.json";
import Link from "next/link";
import { Howl } from "howler";
import { useEffect } from "react";



export default function MultilplechoiceEnglishParttern({multipleChoice}) {
  const multipleChoiceGame=multipleChoice?.data?.data;
            useEffect(() => {
              const sound = new Howl({
                src: ["/audio/Multiple.mp3"],
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
      <main class="xl:w-full xl:h-full max-w-4xl rounded-lg backdrop-blur-sm bg-white/50 border-emerald-500 border-2 shadow-sm p-10 lg:p-20 mx-2 text-gray-800 relative md:text-left">
        <article class="w-full md:w-1/2 px-5 md:px-10">
          <section class="mb-10">
            <audio
              id="song"
              class="block w-60 h-12 mb-9 border-2 border-emerald-300 rounded-full"
              controls
            >
              <source
                src={multipleChoiceGame?.question?.audios}
                type="audio/mpeg"
              />
            </audio>
            <h1 class="font-bold text-md md:text-xl mb-5">
              {multipleChoiceGame?.question?.text}
            </h1>
          </section>
          <section className="mb-10 grid grid-cols-1 gap-1">
            <div class="col-span-1">
              <img
                src={multipleChoiceGame?.question?.images}
                alt="football"
                class="w-36 md:w-36 lg:w-36 xl:w-48 object-cover"
              />
            </div>
          </section>
          <section>
            <h1 class="font-bold md:text-md lg:text-xl mb-9">
              Choose the correct answer
            </h1>
            <section className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-28 lg:gap-32 xl:gap-36">
              {multipleChoiceGame?.answers?.map((item, index) => (
                <section class="col-span-1" key={index}>
                  <article class="inline-block align-bottom md:mx-3">
                    <Link
                      href={
                        item.isCorrect
                          ? `/result/correctAnswer/${multipleChoice?.data?.code}`
                          : `/result/incorrectAnswerPage/${multipleChoice?.data?.code}`
                      }
                      class="btn btn-outline text-sm btn-secondary text-black lg:w-24 lg:h-16 bg-slate-50"
                    >
                      {item.word}
                    </Link>
                  </article>
                </section>
              ))}
            </section>
          </section>
        </article>
        <Lottie
          animationData={ShowDogAim}
          className="right-1 md:-right-28 absolute w-40 md:w-40 md:-bottom-20 lg:w-62 xl:w-64"
        />
        <Lottie
          animationData={ShowPanda}
          className="bg-cover bg-no-repeat w-20 md:w-24 md:-bottom-20 lg:w-28 xl:w-40 bg-fixed absolute left-1 -bottom-24 md:-left-10 lg:left-1 lg:-bottom-20 xl:-bottom-10 xl:-left-20"
        />
      </main>
    </>
  );
}
