"use client";

import React from "react";
import Lottie from "lottie-react";
import RabbitAim from "../../app/utils/assets/rabbit.json";

export default function CountByTenPattern() {
  return (
    <>
      <main class="xl:w-full xl:h-full max-w-5xl max-h-max rounded-xl bg-cyan-100 border-cyan-500 border-2 shadow-sm p-10 lg:p-20 mx-2 text-gray-800 relative md:text-left">
        <article class="w-full md:w-1/2 px-10">
          <section class="mb-10">
            <audio
              id="song"
              class="block w-60 h-12 mb-9 border-2 border-cyan-300 rounded-full"
              controls
            >
              <source
                src="https://open.spotify.com/track/7DE0I3buHcns00C0YEsYsY?si=5e0442c12f514f04"
                type="audio/mpeg"
              />
            </audio>
            <h1 class="font-bold uppercase text-md md:text-md xl:text-xl mb-5">
              តើរូបនេះជាមានចំនួនប៉ុន្មាន?
            </h1>
          </section>
          <section class="grid grid-cols-5 gap-3 mb-9">
            <article class="h-full col-span-1">
              <img
                src="../../../images/football.png"
                class="w-full h-full object-cover"
                alt="Big Image"
              />
            </article>
            <article class="h-full col-span-1">
              <img
                src="../../../images/football.png"
                class="w-full h-full object-cover"
                alt="Big Image 2"
              />
            </article>
            <article class="h-full col-span-1">
              <img
                src="../../../images/football.png"
                class="w-full h-full object-cover"
                alt="Big Image 3"
              />
            </article>
            <article class="h-full col-span-1">
              <img
                src="../../../images/football.png"
                class="w-full h-full object-cover"
                alt="Big Image 3"
              />
            </article>
            <article class="h-full col-span-1">
              <img
                src="../../../images/football.png"
                class="w-full h-full object-cover"
                alt="Big Image 3"
              />
            </article>
          </section>
          <section>
            <h1 class="font-bold uppercase text-xl mb-9">
              ចូររើសចម្លើយដែលត្រឹមត្រូវ
            </h1>
            <section className="grid grid-cols-5 md:grid-cols-6 gap-6">
              <section class="col-span-1">
                <article class="inline-block align-bottom md:mx-3">
                  <button class="btn btn-outline text-lg btn-info text-black lg:w-24 lg:h-16 bg-slate-50">
                    ១
                  </button>
                </article>
              </section>
              <section class="col-span-1">
                <article class="inline-block align-bottom mx-3 md:mx-16">
                  <button class="btn btn-outline btn-info text-lg text-black lg:w-24 lg:h-16 bg-slate-50">
                    ២
                  </button>
                </article>
              </section>
              <section class="col-span-1">
                <article class="inline-block align-bottom  mx-6 md:mx-28">
                  <button class="btn btn-outline btn-info text-lg text-black lg:w-24 lg:h-16 bg-slate-50">
                    ៣
                  </button>
                </article>
              </section>
              <section class="col-span-1">
                <article class="inline-block align-bottom  mx-9 md:mx-40 ">
                  <button class="btn btn-outline btn-info text-lg text-black lg:w-24 lg:h-16 bg-slate-50">
                    ៤
                  </button>
                </article>
              </section>
              <section class="col-span-1">
                <article class="inline-block align-bottom mx-12 md:mx-52">
                  <button class="btn btn-outline btn-info text-lg text-black lg:w-24 lg:h-16 bg-slate-50">
                    ៥
                  </button>
                </article>
              </section>
            </section>
          </section>
        </article>
        <Lottie
          animationData={RabbitAim}
          className="right-1 md:-right-28 absolute md:bottom-1 w-28 md:w-36 lg:w-28 xl:w-40"
        />
        <img
          src="../../../images/longNose.png"
          alt="land"
          className="left-1 md:-left-28 absolute md:bottom-1 w-24 md:w-36 lg:w-28 xl:w-40 bounce"
        />
      </main>
    </>
  );
}
