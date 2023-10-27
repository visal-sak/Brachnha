"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  if (

    pathname === "/dashboard" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/result/incorrectAnswer" ||
    pathname === "/result/correctAnswer" ||
    pathname === "/result/resultScore" ||
    pathname === "/userprofile" ||
    pathname === "/dashboard/superadmin" ||
    pathname === "/dashboard/superadmin/user" ||
    pathname === "/dashboard/superadmin/class" ||
    pathname === "/dashboard/superadmin/score" ||
    pathname === "/dashboard/superadmin/gamecompare" ||
    pathname === "/dashboard/superadmin/admin" ||
    pathname === "/dashboard/superadmin/setting" ||
    pathname === "/dashboard/superadmin/multiplegame" ||
    pathname === "/dashboard/superadmin/dragdropgame" ||
    pathname === "/dashboard/superadmin/countgame" ||
    pathname === "/dashboard/superadmin/gameformop" ||
    pathname === "/dashboard/superadmin/gamecompare" ||
    pathname === "/dashboard/admin" ||
    pathname === "/dashboard/admin/user" ||
    pathname === "/dashboard/admin/class" ||
    pathname === "/dashboard/admin/score" ||
    pathname === "/dashboard/admin/gamecompare" ||
    pathname === "/dashboard/admin/setting" ||
    pathname === "/dashboard/admin/multiplegame" ||
    pathname === "/dashboard/admin/dragdropgame" ||
    pathname === "/dashboard/admin/countgame" ||
    pathname === "/dashboard/admin/gameformop" ||
    pathname === "/dashboard/admin/gamecompare" ||
    pathname === "/dashboard/editor" ||
    pathname === "/dashboard/editor/gamecompare" ||
    pathname === "/dashboard/editor/admin" ||
    pathname === "/dashboard/editor/setting" ||
    pathname === "/dashboard/editor/multiplegame" ||
    pathname === "/dashboard/editor/dragdropgame" ||
    pathname === "/dashboard/editor/countgame" ||
    pathname === "/dashboard/editor/gameformop" ||
    pathname === "/dashboard/editor/gamecompare"
  ) {
    return null;
  }

  return (
    <footer class="relative z-10 bg-fuchsia-800 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="container mx-auto flex justify-between px-4 sm:px-6 md:px-10">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div class="mb-10 w-full">
              <a
                href="javascript:void(0)"
                class="mb-6 inline-block max-w-[160px]"
              >
                <img
                  src="../../../images/rabbitLogo.png"
                  alt="logo"
                  class="w-32"
                />
              </a>
              <p class="text-white mb-7 text-md">
                ប្រាជ្ញាផ្ដល់នូវចំណេះដឹង ការកំំសាន្ដដ៏សម្បូរបែបដល់កុមារ
              </p>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="text-white mb-9 text-lg font-semibold">ទំព័រដើម</h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    class="text-white hover:text-yellow-200 mb-2 inline-block text-base leading-loose"
                  >
                    កម្រិតថ្នាក់
                  </Link>
                </li>
                <li>
                  <Link
                    href="/subject"
                    class="text-white hover:text-yellow-200 mb-2 inline-block text-base leading-loose"
                  >
                    ប្រភេទនៃមុខវិជ្ជា
                  </Link>
                </li>
                <li>
                  <Link
                    href="/allgame"
                    class="text-white hover:text-yellow-100 mb-2 inline-block text-base leading-loose"
                  >
                    ហ្គេមទាំងអស់
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="text-white mb-9 text-lg font-semibold">មុខវិជ្ជា</h4>
              <ul>
                <li>
                  <Link
                    href="/typegame/khmer"
                    class="text-white hover:text-yellow-100 mb-2 inline-block text-base leading-loose"
                  >
                    ភាសាខ្មែរ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/typegame/math"
                    class="text-white hover:text-yellow-100 mb-2 inline-block text-base leading-loose"
                  >
                    គណិតវិទ្យា
                  </Link>
                </li>
                <li>
                  <Link
                    href="/typegame/english"
                    class="text-white hover:text-yellow-100 mb-2 inline-block text-base leading-loose"
                  >
                    ភាសាអង់គ្លេស
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="text-white mb-9 text-lg font-semibold">អំពីពួកយើង</h4>
              <ul>
                <li>
                  <Link
                    href="/aboutus"
                    class="text-white hover:text-yellow-100 mb-2 inline-block text-base leading-loose"
                  >
                    ក្រុមរបស់ប្រាជា្ញ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    class="text-white hover:text-yellow-100 mb-2 inline-block text-base leading-loose"
                  >
                    ចូលរួមជាមួយពួកយើង
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div class="mb-10 w-full">
              <h4 class="text-white mb-9 text-lg font-semibold">
                សហគមន៏របស់ពួកយើង
              </h4>
            </div>
            <article className="flex mt-3 -mx-2 mb-3">
              {/* <Link target="_blank" href="https://t.me/brachnha_edu">
                <div className="grid grid-cols-1 my-5">
                  <div class="flex items-center border bg-slate-100 rounded-lg px-4 py-2 w-44 mx-2">
                    <img
                      src="../../../images/telegram.png"
                      class="w-7 md:w-8"
                    />
                    <div class="text-left ml-3">
                      <p class="text-xs text-gray-700">Communication </p>
                      <p class="text-sm md:text-base">Telegram </p>
                    </div>
                  </div>
                </div>
              </Link> */}
            </article>
            <article class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-">
              <div class="col-span-1">
                <Link
                  href="https://www.facebook.com/profile.php?id=100089575913436&mibextid=ZbWKwL"
                  aria-label="Facebook"
                  target="_blank"
                >
                  {" "}
                  <div class="flex mt-3 w-48 h-14 bg-white text-gray-900 rounded-lg items-center justify-center">
                    <div class="mr-3">
                      {" "}
                      <img
                        src="../../../images/FaceBook.gif"
                        alt="flowers"
                        className="w-9 h-9 rounded-lg"
                      />
                    </div>
                    <div>
                      <div class="text-xs">Check Us</div>
                      <div class="text-lg font-semibold font-sans -mt-1">
                        Facebook
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-span-1">
                <Link
                  href="https://t.me/brachnha_edu"
                  aria-label="Telegram"
                  target="_blank"
                >
                  {" "}
                  <div class="flex mt-3 w-48 h-14 bg-white text-gray-900 rounded-lg items-center justify-center xl:ml-16">
                    <div class="mr-3">
                      {" "}
                      <img
                        src="../../../images/telegramIcon.gif"
                        alt="flowers"
                        className="w-9 h-9 rounded-lg"
                      />
                    </div>
                    <div>
                      <div class="text-xs">Join Us</div>
                      <div class="text-lg font-semibold font-sans -mt-1">
                        Telegram
                      </div>
                    </div>
                  </div>
                </Link>{" "}
              </div>
            </article>
          </div>
        </div>
      </div>
      <div>
        <span class="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.08" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD93D" stop-opacity="2.10" />
                <stop offset="1" stop-color="#FF2171" stop-opacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p class="block text-sm text-white text-center sm:text-center">
        © 2023{" "}
        <Link href="/" target="_blank" class="hover:underline">
          Brachnha_edu™
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
