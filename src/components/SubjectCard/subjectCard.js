"use cilent";


import classNames from 'classnames';
import React,{useState} from 'react'
import styles from "./subjectcard.module.css"
import Link from 'next/link';
import { Freckle_Face } from 'next/font/google';
import { useGetRequestSubjectClientByRouteQuery } from "../../store/features/subject/requestSubjectApi";



export default function SubjectCardK() {
  const {
    data: math,
    isLoading: loadingMath,
    error: errorMath,
  } = useGetRequestSubjectClientByRouteQuery("math");
  const {
    data: khmer,
    isLoading: loadingKhmer,
    error: errorKhmer,
  } = useGetRequestSubjectClientByRouteQuery("khmer");
  const {
    data: english,
    isLoading: loadingEnglist,
    error: errorEnglish,
  } = useGetRequestSubjectClientByRouteQuery("english");
  const KhmerSubject = classNames(
    "absolute right-full top-60 left-64 bottom-16 w-14 md:w-20 lg:w-24 xl:w-30 object-cover hover:scale-125 transition-all duration-500 cursor-pointer",
    styles.bounce
  );
  const MathSubject = classNames(
    "absolute right-full top-60 left-64 bottom-16 w-14 md:w-20 lg:w-24 xl:w-30 object-cover hover:scale-125 transition-all duration-500 cursor-pointer",
    styles.bounce
  );
  const EnglishSubject = classNames(
    "absolute right-full top-60 left-64 bottom-16 w-14 md:w-20 lg:w-24 xl:w-30 object-cover hover:scale-125 transition-all duration-500 cursor-pointer",
    styles.bounce
  );


  return (
    <>
      <div class="relative w-72 lg:w-72 lg:max-h-80 bg-cyan-200 px-6 pt-6 pb-2 rounded-xl shadow-0 transform hover:scale-105 transition duration-500 border-cyan-500 border-2 my-8 m-3">
        <h1 class="mb-3 text-2xl font-bold text-black lg:text-3xl ">
          {math?.data?.subject ? math?.data?.subject : "Math"}
        </h1>
        <h5 class="mt-4 text-gray-800 text-xl cursor-pointer py-5">
          {math?.data?.description ? math?.data?.description : "unknown"}
        </h5>
        <div class="my-2 mt-20">
          <div class="flex space-x-1 items-center justify-between">
            <Link href="/typegame/math">
              <button
                type="button"
                class="text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-4 transform hover:scale-105 transition duration-500 focus:ring-cyan-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                តោះចាប់ផ្ដើម
              </button>
            </Link>
          </div>
          <img
            src="../../../images/Elephant.png"
            alt="flowers"
            className={KhmerSubject}
          />
          <img
            src="../../../images/Grass.png"
            alt="flowers"
            className="absolute right-full top-3/4 bottom-20 w-16 animate-pulse"
          />
        </div>
      </div>
      <div class="relative w-72 lg:w-72 lg:max-h-80 bg-fuchsia-300 px-6 pt-6 pb-2 rounded-xl shadow-0 transform hover:scale-105 transition duration-500 border-fuchsia-500 border-2 my-8 m-3">
        <h1 class="mb-3 text-2xl font-bold text-black lg:text-3xl ">
          {khmer?.data?.subject ? khmer?.data?.subject : "Khmer"}
        </h1>
        <h5 class="mt-4 text-gray-800 text-xl cursor-pointer py-5">
          {khmer?.data?.description ? khmer?.data?.description : "unknown"}
        </h5>
        <div class="my-2 mt-20">
          <div class="flex space-x-1 items-center justify-between">
            <Link href="/typegame/khmer">
              <button
                type="button"
                class="text-white bg-fuchsia-500 hover:bg-fuchsia-800 focus:outline-none focus:ring-4  transform hover:scale-105 transition duration-500 focus:ring-fuchsia-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
              >
                តោះចាប់ផ្ដើម
              </button>
            </Link>
          </div>
          <img
            src="../../../images/Lion.png"
            alt="flowers"
            className={MathSubject}
          />
          <img
            src="../../../images/Grass.png"
            alt="flowers"
            className="absolute right-full top-3/4 bottom-20 w-16 animate-pulse"
          />
        </div>
      </div>
      <div class="relative w-72 bg-emerald-300 px-6 lg:w-72 lg:max-h-80 pt-6 pb-2 rounded-xl shadow-0 transform hover:scale-105 transition duration-500 border-teal-500 border-2 my-8 m-3">
        <h1 class="mb-3 text-2xl font-bold text-black lg:text-3xl ">
          {english?.data?.subject ? english?.data?.subject : "English"}
        </h1>
        <h5 class="mt-4 text-gray-800 text-xl cursor-pointer py-5">
          {english?.data?.description ? english?.data?.description : "unknown"}
        </h5>
        <div class="my-2 mt-20">
          <div class="flex space-x-1 items-center justify-between">
            <Link href="/typegame/english">
              <button
                type="button"
                class="text-white bg-emerald-600 hover:bg-emerald-800 transform hover:scale-105 transition duration-500 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
              >
                តោះចាប់ផ្ដើម
              </button>
            </Link>
          </div>
          <img
            src="../../../images/Hippo.png"
            alt="flowers"
            className={EnglishSubject}
          />
          <img
            src="../../../images/Grass.png"
            alt="flowers"
            className="absolute right-full top-3/4 bottom-20 w-16 animate-pulse"
          />
        </div>
      </div>
    </>
  );
}