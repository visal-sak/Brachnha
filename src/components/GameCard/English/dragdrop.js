"use client"
import React from 'react'
import Link from 'next/link';
import { useGetRequestGameByCodeQuery } from 'src/store/features/games/requestGameCardApi';

export default function DrugDropEnglish() {
  let grade = typeof window !== 'undefined' ? localStorage.getItem("grade") : null;
  const {data:dragDrop,isLoading,error}=useGetRequestGameByCodeQuery(`GDDE${grade}`)
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
     {dragDrop.data.map((dragDrops) => (
      <section className="overflow-hidden relative rounded-lg w-72 md:w-80 md:h-80 cursor-pointer m-4 p-4 bg-emerald-200 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl my-6 border-emerald-500 border-2">
     
        <article className="w-full block h-full">
          <img
            alt="blog photo"
            src={dragDrops.thumbnail}
            className="h-36 w-full object-cover"
          />
          <div className="w-full">
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2 my-6">
              {dragDrops.title}
            </p>
            <div className="flex flex-wrap justify-between items-center mt-4 pt-5">
              <div className="text-base mr-2 py-1.5 px-4 text-gray-700">ហ្គេម</div>
              <Link href={`/games/${dragDrops.code}`}>
                <button className="text-base mr-2 py-1.5 px-4 text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded-full text-center mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                  តោះលេង
                </button>
              </Link>
            </div>
          </div>
        </article>
   
      </section>
      ))}
    </>
  );
}
