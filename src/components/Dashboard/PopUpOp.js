"use client";

import React,{useState} from "react";
import Lottie from "lottie-react";
import potatoData from "../../app/utils/assets/turtle.json";

export default function PopUpOp({values}) {

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
          className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full md:w-1/2 px-10 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                មើលឡើងវិញហ្គេម Operation
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
            <h1 class="font-bold uppercase text-md md:text-xl">
              {values.questionText}
            </h1>
            <section className="mb-10 flex flex-wrap justify-between">
              <article className="grid grid-cols-2 gap-3">
                {values.questionValueKh.map((kh, index) => (
                  <>
                    <section class="col-span-1" key={index}>
                      <h1 class="font-bold uppercase text-2xl md:text-2xl lg:text-5xl">
                        {kh}
                        {index !== values.questionValueKh.length - 1 && "+"}
                      </h1>
                    </section>
                  </>
                ))}
              </article>
            </section>
            <section>
              <h1 class="font-bold uppercase text-md md:text-xl mb-9">
                ចូររើសចម្លើយដែលត្រឹមត្រូវ
              </h1>
              <section className="grid grid-cols-4 md:grid-cols-4 gap-36">
                {values.answerValueKh.map((khm) => (
                  <section class="col-span-1">
                    <article class="inline-block align-bottom md:mx-3">
                      <button class="btn btn-outline text-lg btn-info text-black lg:w-24 lg:h-16 bg-slate-50">
                        {khm}
                      </button>
                    </article>
                  </section>
                ))}
                <Lottie
                  animationData={potatoData}
                  className="right-1 md:-right-28 absolute md:bottom-1 w-40 md:w-56 xl:right-48 xl:top-40 lg:w-56 xl:w-64"
                />
              </section>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
