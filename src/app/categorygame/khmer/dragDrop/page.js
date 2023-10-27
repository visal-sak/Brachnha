"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Howl } from "howler";
import DragDropKhmer from "src/components/GameCard/Khmer/dragdropCard";

export default function DragDropPage() {
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
      <main className="w-full bg-khmerCard">
        <section className="flex-wrap flex items-center justify-evenly p-24">
          <Link href="/typegame/khmer">
            <button
              type="button"
              class="text-black bg-fuchsia-400 hover:bg-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-full text-sm md:text-lg lg:text-xl p-2.5 md:p-4 lg:p-5 text-center inline-flex items-center mr-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
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
          <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-fuchsia-500 bg-fuchsia-300 mt-10 mb-10">
            <h1 class="text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
              ប្រភេទហ្គេមផ្គូផ្គងរូប
            </h1>
          </div>
          <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10 sm:mb-30 md:mb-30">
            <DragDropKhmer />
          </article>
        </section>
      </main>
    </>
  );
}
