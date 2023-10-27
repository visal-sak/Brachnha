"use client";

import React from "react";
import DogAnim from "../../../app/utils/assets/dog.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useGetRequestGameTypeByRouteQuery } from "src/store/features/gameType/requestGameTypeApi";

export default function GameCategory() {
  const {data:multipleChoice,isLoading:multipleChoiceLoading,error:multipleChoiceError}=useGetRequestGameTypeByRouteQuery("multiple-choice")
  const {data:compare,isLoading:compareLoading,error:compareError}=useGetRequestGameTypeByRouteQuery("compare")
  const {data:dragDrop,isLoading:dragDropLoading,error:dragDropError}=useGetRequestGameTypeByRouteQuery("drag-drop")
  if (multipleChoiceLoading || compareLoading) {
    return <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div> // You can customize the loading state as needed
  }
  if (multipleChoiceError || compareError) {
    return <div>Error: {error.message}</div>; // You can customize the error state as needed
  }
  return (
    <>
      <div class="flex flex-col md:w-3/4 border-box ">
        <Link href="/categorygame/khmer/multiple">
          <div class="grid h-16 w-56 p-4 md:h-20 md:w-96 md:p-6 lg:h-20 lg:w-full card rounded-box place-items-left my-5 mx-20 bg-fuchsia-300 border-fuchsia-700 border-2">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-xl lg:text-2xl">
              {multipleChoice?.data && multipleChoice?.data?.name
                ? multipleChoice?.data?.name
                : "Multiple-Choice"}
            </h1>
            <Lottie
              animationData={DogAnim}
              className="w-16 md:w-28 lg:w-30 xl:w-36 relative left-3/4 bottom-14 md:bottom-28 xl:bottom-30 "
            />
          </div>
        </Link>
        <Link href="/categorygame/khmer/compare">
          <div class="grid h-16 w-56 p-4 md:h-20 md:w-96 md:p-6 lg:h-20 lg:w-full card rounded-box place-items-left mx-20 bg-fuchsia-300 border-fuchsia-700 border-2 my-16">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-xl lg:text-2xl">
              {compare?.data && compare?.data?.name
                ? compare?.data?.name
                : "Compare"}
            </h1>
            <Lottie
              animationData={DogAnim}
              className="w-16 md:w-28 lg:w-30 xl:w-36 relative left-3/4 bottom-14 md:bottom-28 xl:bottom-30 "
            />
          </div>
        </Link>
        <Link href="/categorygame/khmer/dragDrop">
          <div class="grid h-16 w-56 p-4 md:h-20 md:w-96 md:p-6 lg:h-20 lg:w-full card rounded-box place-items-left mx-20 bg-fuchsia-300 border-fuchsia-700 border-2">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-xl lg:text-2xl">
              {dragDrop?.data && dragDrop?.data?.name
                ? dragDrop?.data?.name
                : "Drag-Drop"}
            </h1>
            <Lottie
              animationData={DogAnim}
              className="w-16 md:w-28 lg:w-30 xl:w-36 relative left-3/4 bottom-14 md:bottom-28 xl:bottom-30 "
            />
          </div>
        </Link>
      </div>
    </>
  );
}
