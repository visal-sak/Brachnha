"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import ButterflyAnim from "../../app/utils/assets/parrot.json";
import { Howl } from "howler";

export default function DragDropKhmerPartternGame({ dragDrop }) {
  const router = useRouter();
  const [droppedCards, setDroppedCards] = useState([]);

  useEffect(() => {
    const sound = new Howl({
      src: ["/audio/Car.mp3"],
      loop: true,
      volume: 0.5,
    });

    sound.play();

    return () => {
      sound.unload();
    };
  }, []);

  

  useEffect(() => {
    // Cleanup: Remove event listeners
    return () => {
      const dropZones = document.querySelectorAll(".drop-zone");
      dropZones.forEach((dropZone) => {
        dropZone.removeEventListener("dragover", handleDragOver);
        dropZone.removeEventListener("drop", handleDrop);
      });
    };
  }, []);

  // Event handler for drag start
  const handleDragStart = (event, code) => {
    event.dataTransfer.setData("text/plain", code);
  };

  // Event handler for drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const [lost, setLost] = useState(0);
  // Event handler for drop
  const handleDrop = (event, cardCode) => {
    event.preventDefault();
    const code = event.dataTransfer.getData("text/plain");
    const card = document.querySelector(`.card[data-code="${code}"]`);
    const droppedCard = dragDrop.data.data.answers.find(
      (item) => item.codeGame === code
    );
    const dropZone = event.currentTarget;
    if (
      droppedCard &&
      !droppedCards.find((card) => card.codeGame === droppedCard.codeGame)
    ) {
      if (code !== cardCode) {
        toast.error("ចម្លើយមិនត្រឺមត្រូវទេ", {
          theme: "colored",
          autoClose: 1000,
          position: "top-center",
        }); // replace alert with toast
        setLost((prevLost) => prevLost + 1);
      } else {
        dropZone.appendChild(card);
        setDroppedCards((prevCards) => [...prevCards, droppedCard]);

        if (droppedCards.length + 1 === dragDrop.data.data.answers.length) {
          router.push(`/result/correctAnswers/${dragDrop.data.code}`);
        }
      }
    }
  };
  useEffect(() => {
    // Use the correct condition to check if all but one card is dropped incorrectly
    if (lost + 1 === dragDrop.data.data.answers.length) {
      router.push(`/result/incorrectAnswerPage/${dragDrop.data.code}`);
    }
  }, [lost]);

  const game = dragDrop?.data?.data;

  return (
    <>
      <ToastContainer />
      <main class="xl:w-2/3 xl:h-full max-w-5xl rounded-xl backdrop-blur-sm bg-white/50 border-fuchsia-500 border-2 shadow-sm p-5 md:p-10 mx-2 text-gray-800 relative md:text-left">
        <img
          src="../../../images/Pinkk.png"
          alt="land"
          class="bg-cover bg-no-repeat w-14 md:w-24 lg:w-28 xl:w-36 bg-fixed absolute -left-5 -bottom-10 md:-left-10 md:-bottom-10 lg:-left-28 lg:-bottom-3 xl:-bottom-10 xl:-left-36 animate-bounce"
        />
        <article class="w-full md:w-1/2 px-2 md:px-5">
          <section class="mb-5 md:mb-10">
            <audio controls>
              <source src={game?.question?.audios} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <h1 class="font-bold text-sm md:text-md lg:text-2xl mb-3 md:mb-5 mt-5 md:mt-7">
              {game?.question?.text}
            </h1>
          </section>
        </article>
        <section class="max-w-5xl px-5 md:px-10">
          <section class="mb-5 md:mb-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4">
            {game?.question?.dragdrop.map((item, index) => (
              <div>
                <div class="col-span-1" key={index}>
                  <img
                    src={item.path}
                    alt="Card Image"
                    onDragStart={(e) => handleDragStart(e, item.codeGame)}
                    draggable
                    class="w-24 md:w-28 lg:w-32 xl:w-40 object-cover"
                  />
                </div>
                <section class="mb-5 md:mb-10 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-1 md:gap-3">
                  <div
                    data-code={item.codeGame}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, item.codeGame)}
                    class="drop-zone btn btn-outline text-xs md:text-sm xl:text-lg btn-secondary  text-black lg:w-24 lg:h-16 bg-slate-50"
                  ></div>
                </section>
              </div>
            ))}
          </section>
          <section>
            <h1 class="font-bold text-sm md:text-md lg:text-xl mb-3 md:mb-9">
              Choose the correct answer
            </h1>
            <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-3">
              {game?.answers?.map((item, index) => (
                <section class="col-span-1" key={index}>
                  <article
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.codeGame)}
                    data-code={item.codeGame}
                    class="card inline-block align-bottom md:mx-3"
                  >
                    <p class="btn btn-outline text-xs md:text-sm xl:text-lg uppercase btn-secondary  text-black lg:w-24 lg:h-16 bg-slate-50">
                      {item.word}
                    </p>
                  </article>
                </section>
              ))}
            </section>
          </section>
        </section>

        <img
          src="../../../images/Rosita.png"
          class="-right-3 md:-right-20 -bottom-10 md:-bottom-12 lg:-bottom-10 lg:-right-20 xl:bottom-10 absolute w-16 md:w-24 lg:w-28 xl:w-32 xl:-right-20 bounce"
        />

        <Lottie
          animationData={ButterflyAnim}
          class="-right-2 md:-right-24 bottom-24 md:-bottom-3 lg:bottom-20 lg:-right-40 xl:-right-32 xl:bottom-64 absolute w-16 md:w-24 lg:w-36 xl:w-44"
        />
      </main>
    </>
  );
}
