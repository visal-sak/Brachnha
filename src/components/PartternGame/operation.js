"use client";
import React,{useEffect} from "react";
import Lottie from "lottie-react";
import potatoData from "../../app/utils/assets/turtle.json";
import Link from "next/link";
import { Howl } from "howler";

export default function OperationPartternGame({ calculate }) {
  const calculates = calculate?.data?.data?.question?.calculates;
  const answers = calculate?.data?.data?.answers;
            useEffect(() => {
              const sound = new Howl({
                src: ["/audio/Short.mp3"],
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
      <main class="xl:w-full max-w-4xl rounded-lg backdrop-blur-sm bg-white/50 border-fuchsia-500 border-2 shadow-sm p-10 lg:p-20 mx-2 text-gray-800 relative md:text-left">
        <img
          src="../../../images/mermaid.png"
          alt="land"
          className="bg-cover bg-no-repeat w-20 md:w-24 lg:w-28 xl:w-32 bg-fixed absolute left-2 -bottom-32 md:left-1 lg:left-1 lg:bottom-12 xl:-bottom-20 xl:-left-24  bounce"
        />
        <article class="w-full md:w-1/2 px-5 md:px-10">
          <section className="mb-10">
            <audio
              id="song"
              class="block w-56 h-12 mb-9 border-2 border-cyan-300 rounded-full"
              controls
            >
              <source
                src={calculate?.data?.data?.question?.audios}
                type="audio/mpeg"
              />
            </audio>
            <h1 class="font-bold uppercase text-md md:text-xl">
              {calculate?.data?.data?.question?.text}
            </h1>
          </section>
          <section className="mb-10 flex flex-wrap justify-between">
            <article className="grid grid-cols-2 gap-3">
              {calculates?.map((item, index) => (
                <section class="col-span-1 flex flex-wrap" key={index}>
                  <h1 class="font-bold uppercase text-2xl md:text-2xl lg:text-5xl">
                    {item.valueKh}
                    {index !== calculates.length - 1 && " + "}
                  </h1>
                </section>
              ))}
            </article>
          </section>
          <section>
            <h1 class="font-bold uppercase text-md md:text-xl mb-9">
              ចូររើសចម្លើយដែលត្រឹមត្រូវ
            </h1>
            <section className="grid grid-cols-4 md:grid-cols-5 gap-20 md:gap-28 lg:gap-32 xl:gap-40">
              {answers?.map((item, index) => (
                <section class="col-span-1" key={index}>
                  <article class="inline-block align-bottom md:mx-3">
                    <Link
                      href={
                        item.value == calculate?.data?.data?.question?.result
                          ? `/result/correctAnswers/${calculate?.data?.code}`
                          : `/result/incorrectAnswers/${calculate?.data?.code}`
                      }
                    >
                      {" "}
                      <button class="btn btn-outline text-lg btn-info text-black lg:w-24 lg:h-16 bg-slate-50">
                        {item.valueKh}
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
          className="right-5 md:-right-28 absolute md:bottom-1 w-36 md:w-56 lg:w-56 xl:w-64"
        />
      </main>
    </>
  );
}
