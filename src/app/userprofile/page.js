"use client"
import UserProfile from '../../components/UserProfile/Profile'
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserProfilePage() {
  const handleBack=()=>{
    location.href="/"
  }
  return (
    <main className="w-full relative">
        <button
          type="button"
          onClick={handleBack}
          className="text-black bg-cyan-400 hover:bg-cyan-600 relative xl:mx-10 top-0 left-0 mt-4 ml-4 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-full text-sm md:text-lg lg:text-xl p-2.5 md:p-4 lg:p-5 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span className="sr-only">game description</span>
        </button>
      <UserProfile />
    </main>
  );
}
