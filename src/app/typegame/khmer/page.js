"use client";

import React,{useEffect} from "react";
import Link from "next/link";
import GameCategory from "../../../components/GameCategory/Khmer/gameCategory";
import Lottie from "lottie-react";
import ElephantAnim from "../../../app/utils/assets/elephant.json";
import TigersAnim from "../../../app/utils/assets/tigers.json";
import { Howl } from "howler";

export default  function Khmer() {
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
      <main className="w-full bg-kh">
        <section className="flex-wrap flex items-center justify-evenly p-24">
          <Link href="/subject">
            <button
              type="button"
              class="text-black bg-fuchsia-500 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
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
          <div className="box-border h-15 p-4 border-2 w-40 md:w-1/2 md:box-content rounded-full border-fuchsia-500 bg-fuchsia-300 mt-10 mb-10">
            <h1 class=" text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl text-center">
              ហ្គេមភាសាខ្មែរ
            </h1>
          </div>
          <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
            <GameCategory />
            <Lottie
              animationData={ElephantAnim}
              className="w-28 md:w-36 lg:w-40 xl:w-48 relative left-24 md:left-72 md:bottom-10 lg:left-96 lg:bottom-12 xl:right-72 xl:bottom-1"
            />
            <Lottie
              animationData={TigersAnim}
              className="w-28 md:w-36 lg:w-40 xl:w-48 absolute -left-24 top-80 md:left-20 md:bottom-10 lg:-left-10 lg:bottom-12 xl:left-36 xl:-bottom-96 xl:top-0"
            />
          </article>
        </section>
      </main>
    </>
  );
}
