"use client"
import React,{useEffect} from "react";
import Link from "next/link";
import GameCategory from "../../../components/GameCategory/English/gameCategory";
import Lottie from "lottie-react";
import tigerAnim from "../../../app/utils/assets/lovetiger.json";
import monkeyAnim from "../../../app/utils/assets/monkey.json";
import { Howl } from "howler";

export default function English() {

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
      <main className="w-full bg-en">
        <section className="flex-wrap flex items-center justify-evenly p-24">
          <Link href="/subject">
            <button
              type="button"
              class="text-black bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
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
          <div className="box-border h-15 p-4 border-2 w-40 md:w-1/2 md:box-content rounded-full border-emerald-500 bg-emerald-300 mt-10 mb-10">
            <h1 class=" text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl text-center">
              ហ្គេមភាសាអង់គ្លេស
            </h1>
          </div>
          <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
            <GameCategory />
            <Lottie
              animationData={tigerAnim}
              className="w-44 md:w-48 lg:w-40 xl:w-80 relative left-24 md:left-72 md:bottom-10 lg:left-12 lg:top-7 "
            />
            <Lottie
              animationData={monkeyAnim}
              className="w-28 md:w-32 lg:w-40 xl:w-48 absolute xl:absolute lg:relative right-28 bottom-10 md:left-10 lg:left-72 lg:bottom-2 md:bottom-24 xl:top-1 xl:left-14 "
            />
          </article>
        </section>
      </main>
    </>
  );
}
