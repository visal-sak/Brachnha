"use client";
import PartternCount from "../../../components/PartternGame/count";
import React from "react";
import Link from "next/link";
import { useGetRequestGameCountPlayByCodeQuery } from "src/store/features/games/count/requestCountGame";
import OperationPartternGame from "src/components/PartternGame/operation";
import { useGetRequestGameMultipleChoicePlayByCodeQuery } from "src/store/features/games/multiple-choice/requestMultipleChoiceGame";
import { useGetRequestGameDragDropPlayByCodeQuery } from "src/store/features/games/dragdrop/requestDragDropGame";
import { useGetRequestGameComparePlayByCodeQuery } from "src/store/features/games/compare/requestCompareGame";
import { useGetRequestGameCalculatePlayByCodeQuery } from "src/store/features/games/calculate/requestCalculateGame";
import MultilplechoiceParttern from "src/components/PartternGame/mutilplechoice";
import DrugDropEnglishPattern from "src/components/PartternGame/drugDropEnglish";
import MultilplechoiceEnglishParttern from "src/components/PartternGame/multipleChoiceEnglish";
import ComparePartternGame from "src/components/PartternGame/compare";
import DragDropKhmerPartternGame from "src/components/PartternGame/dragDropKhmer";
import Rain from "../../utils/assets/Loadingss.json";
import Lottie from "lottie-react";

export default function CountGame({ params }) {
  const {
    data: gameCount,
    isLoading: countIsLoading,
    error: countError,
  } = useGetRequestGameCountPlayByCodeQuery(params.code);

  const {
    data: gameMultipleChoice,
    isLoading: multipleChoiceIsLoading,
    error: multipleChoiceError,
  } = useGetRequestGameMultipleChoicePlayByCodeQuery(params.code);
  const {
    data: gameDragDrop,
    isLoading: dragDropIsLoading,
    error: dragDropError,
  } = useGetRequestGameDragDropPlayByCodeQuery(params.code);
  const {
    data: gameCompare,
    isLoading: compareIsLoading,
    error: compareError,
  } = useGetRequestGameComparePlayByCodeQuery(params.code);
  const {
    data: gameCalculate,
    isLoading: calculateIsLoading,
    error: calculateError,
  } = useGetRequestGameCalculatePlayByCodeQuery(params.code);
  if (
    countIsLoading ||
    multipleChoiceIsLoading ||
    dragDropIsLoading ||
    compareIsLoading ||
    calculateIsLoading
  ) {
    return (
      <div className="w-full h-60 lg:h-96 flex justify-center items-center mt-20 p-20">
        <Lottie animationData={Rain} alt="land" />
      </div>
    );
  }

  if (
    countError ||
    multipleChoiceError ||
    dragDropError ||
    compareError ||
    calculateError
  ) {
    return <div>Error: {isError.message}</div>;
  }
  // game math counting
  if (params.code.includes("GCTM")) {
    return (
      <>
        <main className="w-full bg-countMath">
          <section>
            <section className="flex-wrap flex items-center justify-evenly p-24">
              <Link href="/categorygame/math/count">
                <button
                  type="button"
                  class="text-black bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
              <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-cyan-500 bg-cyan-300 mt-10 mb-10">
                <h1 class=" text-md font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-2xl text-center">
                  {gameCount?.data?.title}
                </h1>
              </div>
              <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
                <PartternCount gameCount={gameCount} />
              </article>
            </section>
          </section>
        </main>
      </>
    );
    //game operation type math
  } else if (params.code.includes("GOTM")) {
    return (
      <>
        <main className="w-full bg-countMath">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/math/operation">
              <button
                type="button"
                class="text-black bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
            <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-cyan-500 bg-cyan-300 mt-10 mb-10">
              <h1 class=" text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
                {gameCalculate?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
              <OperationPartternGame calculate={gameCalculate} />
            </article>
          </section>
        </main>
      </>
    );
    //game mutiple choice type english
  } else if (params.code.includes("GMCE")) {
    return (
      <>
        <main className="w-full bg-countMath">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/english/multiple">
              <button
                type="button"
                class="text-black bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
            <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-cyan-500 bg-cyan-300 mt-10 mb-10">
              <h1 class=" text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
                {gameMultipleChoice?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
              <MultilplechoiceEnglishParttern
                multipleChoice={gameMultipleChoice}
              />
            </article>
          </section>
        </main>
      </>
    );
    //game mutiple choice type khmer
  } else if (params.code.includes("GMCK")) {
    return (
      <>
        <main className="w-full bg-countMath">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/khmer/multiple">
              <button
                type="button"
                class="text-black bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
            <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-cyan-500 bg-cyan-300 mt-10 mb-10">
              <h1 class=" text-md font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
                {gameMultipleChoice?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm ml-0 md:ml-20 xl:ml-28">
              <MultilplechoiceParttern multipleChoice={gameMultipleChoice} />
            </article>
          </section>
        </main>
      </>
    );
    //game drag drop type english
  } else if (params.code.includes("GDDE")) {
    return (
      <>
        <main className="w-full bg-DrugDropEnglish">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/english/dragdrop">
              <button
                type="button"
                class="text-black bg-teal-400 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
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
            <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-teal-500 bg-teal-300 mt-10 mb-10">
              <h1 class="  text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
                {gameDragDrop?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
              <DrugDropEnglishPattern dragDrop={gameDragDrop} />
            </article>
          </section>
        </main>
      </>
    );
    //game compare type math
  } else if (params.code.includes("GCPM")) {
    return (
      <>
        <main className="w-full bg-countMath">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/math/compare">
              <button
                type="button"
                class="text-black bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full xl:text-xl p-2.5 xl:p-5 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
            <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-cyan-500 bg-cyan-300 mt-10 mb-10">
              <h1 class="  text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
                {gameCompare?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
              <ComparePartternGame gameCompare={gameCompare} />
            </article>
          </section>
        </main>
      </>
    );
    //game compare type Khmer
  } else if (params.code.includes("GCPK")) {
    return (
      <>
        <main className="w-full bg-compare">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/khmer/compare">
              <button
                type="button"
                class="text-black bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 md:text-lg md:p-4 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
            <div className="box-border h-15 p-4 border-2 w-44 md:w-2/3 md:box-content rounded-full border-cyan-500 bg-cyan-300 mt-10 mb-10">
              <h1 class="  text-base font-extrabold leading-none text-gray-900 md:text-2xl lg:text-2xl xl:text-3xl text-center">
                {gameCompare?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
              <ComparePartternGame gameCompare={gameCompare} />
            </article>
          </section>
        </main>
      </>
    );
  } else if (params.code.includes("GDDK")) {
    return (
      <>
        <main className="w-full bg-DrugDropKhmer">
          <section className="flex-wrap flex items-center justify-evenly p-24">
            <Link href="/categorygame/khmer/dragDrop">
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
                {gameDragDrop?.data?.title}
              </h1>
            </div>
            <article className="md:container md:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-1 justify-items-center p-4 my-auto border-0 drop-shadow-sm mx-10">
              <DragDropKhmerPartternGame dragDrop={gameDragDrop} />
            </article>
          </section>
        </main>
      </>
    );
  }
}
