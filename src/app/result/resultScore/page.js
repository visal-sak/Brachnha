"use client";

import CardScoreComponent from "../../../components/CardScore/cardScore";
import React,{useEffect} from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import CongratAnim from "../../../app/utils/assets/congrat.json";
import FireWork from "../../../app/utils/assets/happy.json";
import FireWorks from "../../../app/utils/assets/fireWorks.json";
import { Howl } from "howler";

export default function ResultScorePage() {
        useEffect(() => {
          const sound = new Howl({
            src: ["/audio/Win.wav"],
            loop: true,
            volume: 0.5,
          });

          sound.play();

          return () => {
            sound.unload();
          };
        }, []);
             useEffect(() => {
               const sound1 = new Howl({
                 src: ["/audio/parvo.mp3"],
                 loop: true,
                 volume: 0.5,
               });

               sound1.play();

               return () => {
                 sound1.unload();
               };
             }, []);
             const handleStep =()=>{
              localStorage.setItem("step", 0);
              localStorage.setItem("sumScore", 0);
             }
        
  return (
    <>
      <main className="w-full bg-score">
        <img
          src="../../../images/snowWhite.png"
          alt="land"
          className=" w-20 md:w-28 lg:w-28 xl:w-40 absolute left-5 -bottom-1 md:left-10 md:bottom-10 lg:left-5 lg:bottom-12  xl:left-20 xl:bottom-1 bounce"
        />
        <img
          src="../../../images/flyLion.png"
          alt="land"
          className=" w-20 md:w-36 lg:w-40 xl:w-48 absolute left-44 top-5 md:left-56 md:top-10 lg:left-4 lg:top-20  xl:left-16 xl:bottom-96 animationFlying"
        />
        <img
          src="../../../images/kiki.png"
          alt="land"
          className=" w-20 md:w-44 lg:w-56 xl:w-48 absolute left-44 top-10 md:left-52 md:top-16 lg:left-36 lg:top-24 xl:left-80 xl:bottom-20 flyFoth"
        />
        <img
          src="../../../images/conMicky.png"
          alt="land"
          className=" w-20 md:w-28 lg:w-32 xl:w-40 absolute right-5 -bottom-1 md:right-10 md:bottom-10 lg:right-5 lg:bottom-12 xl:right-80 xl:bottom-1 bounce"
        />
        <Lottie
          animationData={FireWork}
          alt="land"
          className=" w-56 md:w-80 lg:w-80 xl:w-full absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-40 xl:-top-10"
        />
        <Lottie
          animationData={FireWorks}
          alt="land"
          className=" w-56 md:w-80 lg:w-80 xl:w-full absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-40 xl:-top-10"
        />
        <img
          src="../../../images/Tink.png"
          alt="land"
          className=" w-16 md:w-28 lg:w-28 xl:w-40 absolute right-1 top-44 md:right-5 md:top-48 lg:right-4 lg:top-36  xl:right-10 xl:bottom-96 flyAnim "
        />
        <img
          src="../../../images/dog101.png"
          alt="land"
          className=" w-20 md:w-24 lg:w-28 xl:w-36 absolute left-36 -bottom-1 md:left-36 md:bottom-10 lg:left-36 lg:bottom-12  xl:left-96 xl:bottom-1 bounce"
        />
        <img
          src="../../../images/oggy.png"
          alt="land"
          className=" w-20 md:w-28 lg:w-32 xl:w-40 absolute right-28 -bottom-1 md:right-72 md:bottom-10 lg:left-[700px] lg:bottom-12 xl:left-56 xl:bottom-1 bounce"
        />
        <div className=" mx:0 md:mx-36 p-5">
          <Link href="/allgame" onClick={handleStep} class="text-black relative z-50 bg-cyan-500 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
          </Link>
        </div>
        <Lottie
          animationData={CongratAnim}
          className="w-44 md:w-44 lg:w-64 xl:w-80 absolute left-1 bottom-96 md:left-10 lg:left-44 lg:bottom-2/3 xl:left-64 xl:bottom-96 md:bottom-2/3 "
        />
        <Lottie
          animationData={CongratAnim}
          className="w-44 md:w-44 lg:w-64 xl:w-80 absolute right-1 bottom-96 md:right-10 lg:right-44 lg:bottom-2/3 xl:right-64 xl:bottom-96 md:bottom-2/3 "
        />
        <article className=" max-h-screen grid grid-cols-1 justify-items-center p-3 border-0 drop-shadow-sm">
          <div className="inco my-0 lg:my-10">
            <div class="line1">
              {" "}
              <ruby>សូ</ruby>
              <ruby>ម</ruby>
              <ruby>អប</ruby>
            </div>
            <div class="line2">
              {" "}
              <ruby>អរ</ruby>
              <ruby>សា</ruby>
              <ruby>ទរ</ruby>
            </div>
          </div>
          <CardScoreComponent />
        </article>
      </main>
    </>
  );
}
