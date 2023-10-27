"use client";

import React from "react";
import DinoDanceAnim from "../../../app/utils/assets/dancedino.json";
import Lottie from "lottie-react";
import Link from "next/link";
import fishAnim from "../../../app/utils/assets/fish.json";
import FishAnim from "../../../app/utils/assets/bigfish.json";
import { useGetRequestGameTypeByRouteQuery } from "src/store/features/gameType/requestGameTypeApi";

export default function GameCategory() {
  const {data:operation,isLoading:operationLoading,error:operationError}=useGetRequestGameTypeByRouteQuery("operation")
  const {data:count,isLoading:countLoading,error:countError}=useGetRequestGameTypeByRouteQuery("count")
  const {data:compare,isLoading:compareLoading,error:compareError}=useGetRequestGameTypeByRouteQuery("compare")

  if (operationLoading || countLoading || compareLoading) {
    return <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div> // You can customize the loading state as needed
  }

  if (operationError || countError || compareError) {
    return <div>Error: {error.message}</div>; // You can customize the error state as needed
  }
  return (
    <>
      <div class="flex flex-col md:w-3/4 border-box ">
        <Link href="/categorygame/math/count">
          <div class="grid h-16 w-56 p-4 md:h-20 md:w-96 md:p-6 lg:h-20 lg:w-full card rounded-box place-items-left mx-20 bg-cyan-200 border-cyan-500 border-2">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-xl lg:text-2xl">
            {count?.data && count?.data?.name ? count?.data?.name :"Count"}
            </h1>
            <Lottie
              animationData={DinoDanceAnim}
              className="w-16 md:w-28 lg:w-30 xl:w-36 relative left-3/4 bottom-14 md:bottom-28 xl:bottom-30 "
            />
          </div>
        </Link>
        <Link href="/categorygame/math/compare">
          <div class="grid h-16 w-56 p-4 md:h-20 md:w-96 md:p-6 lg:h-20 lg:w-full card rounded-box place-items-left my-10 mx-20 bg-cyan-200 border-cyan-500 border-2">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-xl lg:text-2xl">
            {compare?.data && compare?.data?.name ? compare?.data?.name :"Compare"}
            </h1>
            <Lottie
              animationData={DinoDanceAnim}
              className="w-16 md:w-28 lg:w-30 xl:w-36 relative left-3/4 bottom-14 md:bottom-28 xl:bottom-30 "
            />
          </div>
        </Link>
        <Link href="/categorygame/math/operation">
          <div class="grid h-16 w-56 p-4 md:h-20 md:w-96 md:p-6 lg:h-20 lg:w-full card rounded-box place-items-left mx-20 bg-cyan-200 border-cyan-500 border-2">
            <h1 class=" text-lg font-extrabold leading-none text-gray-900 md:text-xl lg:text-2xl">
            {operation?.data && operation?.data?.name ? operation?.data?.name :"Opration"}
            </h1>
            <Lottie
              animationData={DinoDanceAnim}
              className="w-16 md:w-28 lg:w-30 xl:w-36 relative left-3/4 bottom-14 md:bottom-28 xl:bottom-30 "
            />
          </div>
        </Link>
        <Lottie
          animationData={fishAnim}
          className="w-44 md:w-48 lg:w-44 xl:w-80 relative left-24 md:left-48 md:bottom-24 lg:left-12 lg:top-7 "
        />
        <Lottie
          animationData={FishAnim}
          className="w-44 md:w-48 lg:w-44 xl:w-80 relative left-24 md:left-48 md:bottom-24 lg:left-44"
        />
      </div>
    </>
  );
}
