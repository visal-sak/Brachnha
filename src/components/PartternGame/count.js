"use client";

import React,{useEffect} from "react";
import Lottie from "lottie-react";
import potatoData from "../../app/utils/assets/potato.json";
import Link from "next/link";
import { Howl } from "howler";

export default function PartternCount({gameCount}) {
  const countGame = gameCount.data.data;
            useEffect(() => {
              const sound = new Howl({
                src: ["/audio/Sun.mp3"],
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
      <main class="xl:w-full xl:h-full max-w-5xl rounded-xl backdrop-blur-sm bg-white/50 border-cyan-500 border-2 shadow-sm p-10 lg:p-20 mx-2 text-gray-800 relative md:text-left">
        <article class="w-full md:w-1/2 px-5 md:px-10">
          <section class="mb-10">
            <audio
              id="song"
              class="block w-60 h-12 mb-9 border-2 border-cyan-300 rounded-full"
              controls
            >
             <source src={countGame?.question?.audios} type="audio/mpeg" />
            </audio>
            <h1 class="font-bold uppercase text-md md:text-xl mb-5">
              {countGame.question.text}
            </h1>
          </section>
        </article>
        <article>
          {" "}
          <article className="mb-10 grid grid-cols-3 md:grid-cols-4 gap-4">
            {(() => {
              const imgElements = [];
              for (let i = 0; i < countGame.question.count; i++) {
                imgElements.push(
                  <div class="col-span-1">
                    <img
                      src={countGame.question.images}
                      alt="football"
                      class="w-20 ms:w-24 lg:w-28 xl:w-36 object-cover"
                    />
                  </div>
                );
              }
              return imgElements;
            })()}
          </article>
          <section>
            <h1 class="font-bold uppercase text-md md:text-xl mb-9 xl:ml-6">
              ចូររើសចម្លើយដែលត្រឹមត្រូវ
            </h1>
            <section className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-24 lg:gap-36">
              {countGame.answers.map((count) => (
                <section class="col-span-1">
                  <article class="inline-block align-bottom md:mx-3">
                    <Link
                      href={
                        count.value == countGame.question.result
                          ? `/result/correctAnswers/${gameCount.data.code}`
                          : `/result/incorrectAnswers/${gameCount.data.code}`
                      }
                    >
                      {" "}
                      <button class="btn btn-outline text-lg btn-info text-black w-full h-full md:w-20 md:h-12 lg:w-24 lg:h-16 bg-slate-50">
                        {count.valueKh}
                      </button>
                    </Link>
                  </article>
                </section>
              ))}
            </section>
          </section>
        </article>

        <Lottie
          animationData={potatoData}
          className="right-1 md:-right-28 absolute md:bottom-1 w-28 md:w-36 lg:w-28 xl:w-40"
        />
        <img
          src="../../../images/dora.png"
          alt="land"
          className="left-1 md:-left-28 absolute md:bottom-1 w-28 md:w-36 lg:w-28 xl:w-40 bounce"
        />
      </main>
    </>
  );
}
