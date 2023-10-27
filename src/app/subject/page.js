"use client";

import Link from "next/link";
import React,{useEffect} from "react";
import Lottie from "lottie-react";
import ButterflyAnim from "../../app/utils/assets/butterfly.json";
import SubjectCardK from "../../components/SubjectCard/subjectCard";
import { Howl } from "howler";

export default function subjectKindergardenPage() {

     useEffect(() => {
       const sound = new Howl({
         src: ["/audio/SubSong.mp3"],
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
      <main className="w-full bg-sub">
        <section className="flex-wrap flex items-center justify-evenly p-24">
          <Link href="/">
            <button
              type="button"
              class="text-black bg-amber-400 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-full text-sm md:text-lg lg:text-xl p-2.5 md:p-4 lg:p-5 text-center inline-flex items-center mr-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span class="sr-only">game description</span>
            </button>
          </Link>
          <div className="box-border h-15 w-1/2 p-4 border-2 md:box-content max-sm-h-10 max-sm-w-10 rounded-full border-amber-500 bg-amber-200 mt-10 mb-10">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-3xl lg:text-4xl text-center">
              មុខវិជ្ជា
            </h1>
          </div>

          <article className="md:container lg:mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-center p-4 my-1 border-0 drop-shadow-sm">
            <SubjectCardK />
            <Lottie
              animationData={ButterflyAnim}
              className="w-44 md:w-48 lg:w-44 xl:w-72 relative left-24 md:left-72 lg:left-16 md:bottom-24 "
            />
            <Lottie
              animationData={ButterflyAnim}
              className="w-44 md:w-48 lg:w-44 xl:w-72 relative left-24 md:left-62 lg:left-20 md:bottom-24 "
            />
            <Lottie
              animationData={ButterflyAnim}
              className="w-44 md:w-48 lg:w-44 xl:w-72 relative left-24 md:left-48 md:bottom-24 lg:left-16 "
            />
          </article>
        </section>
      </main>
    </>
  );
}
