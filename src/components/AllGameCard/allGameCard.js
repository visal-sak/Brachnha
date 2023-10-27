"use client"
import React from 'react'
import Link from 'next/link';
import { useGetRequestGameByCodeQuery } from 'src/store/features/games/requestGameCardApi';
import classNames from 'classnames';
import styles from "./allgamecard.module.css"

export default function AllGameCardComponent() {
  const border = classNames(
    "overflow-hidden relative rounded-lg w-72 md:w-80 md:h-80 cursor-pointer m-4 p-4 bg-cyan-300 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl my-6 border-2 border-cyan-600",
  );
  const playButton = classNames(
    "text-base mr-2 py-2 px-4 text-gray-800 bg-cyan-400 hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-center mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800",
  );
  const {data:allgame,isLoading,error}=useGetRequestGameByCodeQuery("G")
  if (
   isLoading
  ) {
    return (
      <article
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </article>
    );
  }

  if (
error
  ) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
      {allgame?.data?.map((item,index)=>(
        <div key={index} className={border}>
          <div class="w-full block h-full">
            <img
               alt="blog photo"
            src={item.thumbnail}
            class="h-36 w-full object-cover"q
            />
            <div class="w-full">
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2 my-6">
                {item.title}
              </p>
              <div class="flex flex-wrap justify-between items-center mt-4 pt-5">
                <div class="text-base mr-2 py-1.5 px-4 text-gray-700">ហ្គេម</div>
                <Link href={`/games/${item.code}`}>
                  <button class={playButton}>
                    តោះលេង
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))} 
      </section>
    </>
  );
}
