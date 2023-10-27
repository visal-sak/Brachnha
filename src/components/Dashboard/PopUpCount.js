"use client";

import React,{useState} from "react";
import Lottie from "lottie-react";
import RabbitAim from "../../app/utils/assets/rabbit.json";
import styles from './popupcount.module.css'
import classNames from "classnames";

export default function PopupCountGame({ values}) {
      const imageUrl = values.image ? URL.createObjectURL(values.image) : null;
      const StyleImg = classNames(
        "left-1 md:-left-64 top-56 absolute w-24 md:w-36 lg:w-28 xl:w-64 xl:left-0.5 ",
        styles.animation
      );
       const [isModalVisible, setIsModalVisible] = useState(false);
       const audioUrl = values.audio ? URL.createObjectURL(values.audio) : null;
  return (
    <>
      <button
        onClick={() => setIsModalVisible(true)}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="block w-full  text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        មើលឡើងវិញ
      </button>

      {isModalVisible && (
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full h-full rounded-xl bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg py-6 w-full md:w-1/2 px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                មើលឡើងវិញហ្គេម Count
              </h3>
              <button
                type="button"
                className="text-purple-500 hover:text-purple-500 focus:outline-none"
                onClick={() => setIsModalVisible(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <audio
              id="song"
              className="block w-60 h-12 mb-9 border-2 border-emerald-300 rounded-full"
              controls
            >
              <source src={audioUrl} type="audio/mpeg" />
            </audio>
            <h1 class="font-bold uppercase text-md md:text-md xl:text-xl mb-5">
              {values.questionText}
            </h1>
            <section>
              <section class="grid grid-cols-2 gap-3 mb-9">
                <article class="h-full col-span-1">
                  <img
                    src={imageUrl}
                    class="w-44 object-cover"
                    alt="Big Image"
                  />
                </article>
              </section>
              <h1 class="font-bold uppercase text-xl mb-9">
                ចូររើសចម្លើយដែលត្រឹមត្រូវ
              </h1>
              <section className="grid grid-cols-5 md:grid-cols-6 gap-28">
                {values.answerCountKh.map((kh) => (
                  <section class="col-span-1">
                    <article class="inline-block align-bottom md:mx-3">
                      <button class="btn btn-outline text-lg btn-info text-black lg:w-24 lg:h-16 bg-slate-50">
                        {kh}
                      </button>
                    </article>
                  </section>
                ))}
              </section>
            </section>
            <Lottie
              animationData={RabbitAim}
              className="right-1 md:-right-28 absolute md:bottom-1 xl:right-96 xl:top-48 w-28 md:w-36 lg:w-28 xl:w-40"
            />
            <img
              src="../../../images/jusmin.png"
              alt="land"
              className={StyleImg}
            />
          </div>
        </div>
      )}
    </>
  );
}
