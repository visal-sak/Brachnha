"use client";
import React,{useEffect} from "react";
import Lottie from "lottie-react";
import RabbitAim from "../../app/utils/assets/rabbit.json";
import Link from "next/link";
import { Howl } from "howler";

export default function MultilplechoiceParttern({multipleChoice}) {
    const multipleChoiceGame=multipleChoice?.data?.data;
           useEffect(() => {
             const sound = new Howl({
               src: ["/audio/ope.mp3"],
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
      <main class="xl:w-full xl:h-full max-w-4xl rounded-lg backdrop-blur-sm bg-white/50 border-fuchsia-500 border-2 shadow-sm p-10 lg:p-20 mx-2 text-gray-800 relative md:text-left">
        <img
          src="../../../images/flyBarbie.png"
          alt="land"
          className="left-80 -top-16 md:left-full absolute md:bottom-1 w-0 md:w-28 lg:w-28 xl:w-32 xl:left-full xl:top-10 bounce"
        />
        <img
          src="../../../images/unicorn.png"
          alt="land"
          className="left-1 -top-10 md:-left-28 absolute md:bottom-1 w-24 md:w-32 lg:w-28 xl:w-40 xl:-left-36 xl:top-10 bounce"
        />
        <article class="w-full md:w-1/2 px-5 md:px-10">
          <section class="mb-10">
            <audio
              id="song"
              class="block w-60 h-12 mb-9 border-2 border-fuchsia-300 rounded-full"
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
              ចូររើសចម្លើយដែលត្រឹមត្រូវ
            </h1>
            <section className="grid grid-cols-3 md:grid-cols-3 gap-24 md:gap-28 lg:gap-32 xl:gap-36">
              {multipleChoiceGame?.answers?.map((item, index) => (
                <section class="col-span-1" key={index}>
                  <article class="inline-block align-bottom md:mx-3">
                    <Link
                      href={
                        item.isCorrect
                          ? `/result/correctAnswer/${multipleChoice?.data?.code}`
                          : `/result/incorrectAnswer/${multipleChoice?.data?.code}`
                      }
                      class="btn btn-outline text-lg btn-secondary text-black lg:w-24 lg:h-16 bg-slate-50"
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
          animationData={RabbitAim}
          className="right-1 md:-right-28 absolute md:bottom-1 w-32 md:w-40 lg:w-62 xl:w-48"
        />
        <img
          src="../../../images/Ger.png"
          alt="land"
          className="left-1 md:-left-28 absolute md:bottom-1 w-24 md:w-32 lg:w-36 xl:w-40 bounce"
        />
      </main>
    </>
  );
}