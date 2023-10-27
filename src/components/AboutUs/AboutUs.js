"use client";

import React from "react";
import styles from "./aboutus.module.css";
import Link from "next/link";
import classNames from "classnames";
import Lottie from "lottie-react";
import animationAim from "../../app/utils/assets/butterflys.json";
import animationFlower from "../../app/utils/assets/flower.json";

export default function AboutUsComponents() {
  const BorderBox = classNames(
    "w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-46 lg:w-64 lg:h-80 border-4 border-fuchsia-800",
    styles.borderbox
  );
  const BoredrBoxStyle = classNames(
    "w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80 border-4 border-fuchsia-800",
    styles.borderbox
  );
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center my-10 md:my-24 lg:my-10">
          <div class="w-full lg:w-1/2 xl:ml-10">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                ស្វាគមន៏មកកាន់វេបសាយប្រាជ្ញា
              </h1>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                ប្រាជ្ញាគឺជាវេបសាយបង្កើតឡើងដើម្បីផ្ដល់ចំណេះដឺងដល់សិស្សានុសិស្ស
                ក៏ដូចជាកុមារតូចៗ នៅក្នុងទម្រង់ជាហ្គេមសប្បាយៗ។
                ប្រាជ្ញាផ្ដល់អោយសិស្សានុសិស្សនូវ៖
              </p>
              <div class="grid gap-6 mt-8 sm:grid-cols-2">
                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div class="mx-3">
                    ចំណេះដឹងនៅក្នុងទម្រង់ជាហ្គេមជាភាសាខ្មែរ
                  </div>
                </div>
                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div class="mx-3">
                    បណ្ដុះជំនាញនៃការគិត ការដោះស្រាយបញ្ហា ការសម្រេចចិត្ត​
                  </div>
                </div>
                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div class="mx-3">
                    មុខវិជ្ជាសំខាន់ៗតម្រូវសម្រាប់សិស្សកម្រិតដំបូង
                  </div>
                </div>
                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div class="mx-3">
                    ការរចនាហ្គេមមានភាពសម្បូរបែបនិងទាក់ទាញដោយប្រើប្រាស់គំនូរជីវចល
                  </div>
                </div>
                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div class="mx-3">ហ្គេមសំបូរបែប ច្រើនទម្រង់</div>
                </div>
                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div class="mx-3">លំហាត់យកចេញពីសៀវភៅក្រសួង</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              class="object-cover w-full h-full max-w-2xl rounded-md"
              src="../../../images/aboutus.png"
              alt="glasses photo"
            />
          </div>
        </div>

        <div class="py-20 bg-gray-200">
          <div class="container mx-auto px-6 md:px-12 xl:px-32">
            <div class="mb-16 text-center">
              <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                Mentor របស់ពួកយើង
              </h2>
            </div>
            <div class="grid gap-12 items-center md:grid-cols-2">
              <div class="space-y-4 text-center">
                <img
                  class={BorderBox}
                  src="../../../images/teacher chayya.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 class="text-2xl font-semibold mb-4">
                    លោកគ្រូ ចាន់ ឆាយ៉ា
                  </h4>
                  <h4 class="block text-md text-gray-700">
                    Backend Instructor
                  </h4>
                </div>
              </div>
              <Lottie
                animationData={animationFlower}
                className="w-0 xl:w-44 xl:top-[920px] xl:right-[870px] absolute"
              />
              <Lottie
                animationData={animationFlower}
                className="w-0 xl:w-44 xl:top-[920px] xl:right-[1132px] absolute"
              />
              <Lottie
                animationData={animationAim}
                className=" w-0 xl:w-56 xl:top-[850px] xl:right-[820px] absolute"
              />
              <div class="space-y-4 text-center">
                <img
                  class={BoredrBoxStyle}
                  src="../../../images/teachermey.jpg"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 class="text-2xl font-semibold mb-4">
                    អ្នកគ្រូ មុំ រស្មី
                  </h4>
                  <h4 class="block text-md text-gray-700">
                    Frontend Instructor
                  </h4>
                </div>
              </div>
              <div className="relative">
                <Lottie
                  animationData={animationFlower}
                  className="w-0 xl:w-44 xl:-top-[320px] xl:-right-[570px] absolute"
                />
                <Lottie
                  animationData={animationFlower}
                  className="w-0 xl:w-44 xl:-top-[320px] xl:-right-[310px] absolute"
                />
                <Lottie
                  animationData={animationAim}
                  className="w-0 xl:w-56 xl:-top-[380px] xl:-right-[630px] absolute"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            ក្រុមរបស់ពួកយើង
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-teal-200 hover:border-teal-500 hover:border-2 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 hover:ring-teal-400 hover:ring-4"
                src="../../../images/sal.jpg"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold  text-gray-700 capitalize dark:text-gray-800 group-hover:text-black">
                សាក់ វិសាល
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-black">
                Frontend | UI UX design
              </p>

              <div class="flex mt-3 -mx-2">
                <Link
                  href="https://web.facebook.com/sreang.visal.75/"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/visal-sak"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-cyan-100 hover:border-cyan-500 hover:border-2 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 hover:ring-cyan-500"
                src="../../../images/nha.jpg"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-gray-800 group-hover:text-black">
                ប៉ុស បញ្ញា
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-black">
                Frontend | Database
              </p>

              <div class="flex mt-3 -mx-2">
                <Link
                  href="https://www.facebook.com/Panha.03/"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/p4nh4"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-purple-300 hover:border-purple-600 hover:border-2 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 hover:ring-purple-500 hover:ring-4"
                src="../../../images/vidy.jpg"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-gray-800 group-hover:text-black">
                ង៉ាន់ វីឌី
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-black">
                Backend | Frontend
              </p>

              <div class="flex mt-3 -mx-2">
                <Link
                  href="https://www.facebook.com/jess.novindy"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/Vandy1100"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-pink-300 hover:border-pink-600 hover:border-2 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 hover:ring-pink-500 hover:ring-4"
                src="../../../images/reach.jpg"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-gray-800 group-hover:text-black">
                ពៅ ពណ្ណរាជ
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-black">
                Backend | Video
              </p>

              <div class="flex mt-3 -mx-2">
                <Link
                  href="https://www.facebook.com/reachhofficial"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/reachhwasup"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-fuchsia-300 hover:border-fuchsia-600 hover:border-2 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300  hover:ring-fuchsia-500 hover:ring-4"
                src="../../../images/sna.jpg"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-gray-800 group-hover:text-black">
                សៀន វាសនា
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-black">
                Frontend | Database
              </p>

              <div class="flex mt-3 -mx-2">
                <Link
                  href="https://www.facebook.com/rayut.lily"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/veasnaITE"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-emerald-200 hover:border-emerald-600 hover:border-2 rounded-xl">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 hover:ring-emerald-500 hover:ring-4"
                src="../../../images/leap.jpg"
                alt="seangleap"
              />

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-gray-800 group-hover:text-black">
                សៀង សេងលាភ
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-black">
                Backend | Document
              </p>

              <div class="flex mt-3 -mx-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=100022520083096"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/sengleaph"
                  class="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section class="min-h-screen bg-white dark:bg-gray-900 lg:flex">
          <div class="flex flex-col justify-center w-full p-8 lg:bg-gray-100 lg:dark:bg-gray-800 lg:px-12 xl:px-32 lg:w-1/2">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              ទំនាក់ទំនងមកកាន់ពួកយើង
            </h1>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              សួរយើងគ្រប់យ៉ាង ហើយយើងចង់ឮពីអ្នក
            </p>

            <div class="mt-6 md:mt-8">
              <h3 class="font-medium text-gray-600 dark:text-gray-300 ">
                Follow us
              </h3>

              <div class="flex mt-4 -mx-1.5 ">
                <Link
                  class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.facebook.com/profile.php?id=100089575913436&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <img
                    src="../../../images/FaceBook.gif"
                    alt="flowers"
                    className="w-8 h-8 rounded-lg"
                  />
                </Link>

                <Link
                  class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="https://t.me/brachnha_edu"
                  target="_blank"
                >
                  <img
                    src="../../../images/telegramIcon.gif"
                    alt="flowers"
                    className="w-8 h-8 rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
            <form>
              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    ឈ្មោះប្រើប្រាស់
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-fuchsia-400 dark:focus:border-fuchsia-400 focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    អាស័យដ្ឋានអុីម៉ែល
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-fuchsia-400 dark:focus:border-fuchsia-400 focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="w-full mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  សារ
                </label>
                <textarea
                  class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-fuchsia-400 dark:focus:border-fuchsia-400 focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="សរសេរសារ......"
                ></textarea>
              </div>

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white hover:bg-fuchsia-800 bg-fuchsia-500 rounded-xl hover:bgfuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50">
                ផ្ញើ
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
