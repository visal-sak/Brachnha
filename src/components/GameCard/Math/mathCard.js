"use client"
import Link from 'next/link';
import React from 'react'
import { useGetRequestGameByCodeQuery } from 'src/store/features/games/requestGameCardApi';

export default function MathCardCount() {
  let grade = typeof window !== 'undefined' ? localStorage.getItem("grade") : null;
  const {data:count,isLoading,error}=useGetRequestGameByCodeQuery(`GCTM${grade}`)
  if (isLoading) {
    return <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div> // You can customize the loading state as needed
  }

  if (error) {
    return <div>Error: {error.message}</div>; // You can customize the error state as needed
  }
  return (
    <>
      {count.data.map((counts) => (
      <div class="overflow-hidden relative rounded-lg w-72 md:w-80 md:h-80 cursor-pointer m-4 p-4 bg-cyan-200 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl my-6 border-cyan-500 border-2">
          <div class="w-full block h-full">
            <img
              alt="blog photo"
              src={counts.thumbnail}
              class="h-36 w-full object-cover"
            />
            <div class="w-full">
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2 my-6">
                {counts.title}
              </p>
              <div class="flex flex-wrap justify-between items-center mt-4 pt-5">
                <div class="text-base mr-2 py-1.5 px-4 text-gray-700">ហ្គេម</div>
                <Link href={`/games/${counts.code}`}>
                  <button class="text-base mr-2 py-1.5 px-4 text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-center mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    តោះលេង
                  </button>
                </Link>
              </div>
            </div>
          </div>
      </div>
      ))}
    </>
  );
}
