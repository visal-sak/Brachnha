"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetRequestGameByCodeQuery } from "src/store/features/games/requestGameCardApi";
import Rain from "../../../utils/assets/rain.json";
import Lottie from "lottie-react";
import { Howl } from "howler";
import { useDispatch } from "react-redux";
import { useGetRequestUserGoogleByEmailQuery, useGetUserQuery } from "src/store/features/user/userApiSlice";
import { setCurrentUser } from "src/store/features/auth/authSlice";
import { useCreateRequestGameHistoryMutation } from "src/store/features/gameHistory/requestSubjectApi";
import { getSession } from "next-auth/react";

export default function IncorrectAnswerPage({ params }) {
  const [id, setId] = useState(0);
  const router =useRouter()
  const {
    data: user,
    isLoading,
    isSuccess,
    isError
  } = useGetUserQuery();
  const dispatch = useDispatch();

        useEffect(() => {
          const sound = new Howl({
            src: ["/audio/GameOver.wav"],
            loop: true,
            volume: 0.5,
          });

          sound.play();

          return () => {
            sound.unload();
          };
        }, []);
  
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);
  useEffect(() => {
    setId(user?.data?.id);
    [];
  });
  const [postGameHistory] = useCreateRequestGameHistoryMutation();
  useEffect(() => {
    // Check if the postGameHistory mutation has already been executed during the current session
    const hasPostedGameHistory = localStorage.getItem("hasPostedGameHistory");
  
    if (!hasPostedGameHistory || hasPostedGameHistory !== "true") {
      const postData = async () => {
        try {
          const values = {
            code: params.code,
            createdBy: id,
            score: 0,
            won: false,
          };
  
          const response = await postGameHistory(values).unwrap();
          if (response?.status === true) {
            let step = parseInt(localStorage.getItem("step") || "1", 10);
            // Increment the value.
            step++;
            // Store the updated value back into localStorage.
            localStorage.setItem("step", step);
            if(step>=10){
              location.href="/result/resultScore"
            }
          }

          localStorage.setItem("hasPostedGameHistory", "true");
  
  
        } catch (error) {
        }
      };
      postData();
    }
  }, [id, params.code, postGameHistory]);




   //set session from google
   const [session, setSession] = useState();
   const [loading, setLoading] = useState(true);
   const [userId, setUserId] = useState(0);
   useEffect(async () => {
     const response = await getSession();
     setSession(response);
   }, []);
   const {
    data: googleUser,
    isLoading: googleLoading,
    isSuccess: googleSuccess,
    error: errorGoogle,
  } = useGetRequestUserGoogleByEmailQuery(session?.user?.email);
  
  useEffect(() => {
    if (googleUser?.data?.id) {
      setUserId(googleUser.data.id);
    }
  }, [googleUser]);
  
  // When the googleUser data is fetched successfully, setLoading(false)
  useEffect(() => {
    if (googleSuccess) {
      setLoading(false);
    }
  }, [googleSuccess]);
  
  
  // ...
  
  useEffect(() => {
    const postData = async () => {
      try {
        // Check if the postGameHistory mutation has already been executed during the current session
        const hasPostedGameHistory = localStorage.getItem("hasPostedGameHistorys");
        if (hasPostedGameHistory !== "true") {
          const values = {
            code: params.code,
            createdBy: userId,
            score: 0,
            won: false,
          };
  
          // You can now use the postGameHistory mutation here with 'values'
          const response = await postGameHistory(values).unwrap();
          if (response?.status === true) {
            let step = parseInt(localStorage.getItem("step") || "1", 10);
            // Increment the value.
            step++;
            // Store the updated value back into localStorage.
            localStorage.setItem("step", step);
            if(step>=10){
              location.href="/result/resultScore"
            }
          }
          localStorage.setItem("hasPostedGameHistorys", "false");
        }
      } catch (error) {
        // Handle any errors here
      }
    };
  
    postData();
  }, [userId, params.code, postGameHistory, loading]);




  const {
    data: game,
    isLoadding,
    error,
  } = useGetRequestGameByCodeQuery(params.code);
   const [code, setCode] = useState([]);
   useEffect(() => {
     if (game && game.data && game.data.length > 0) {
       const codes = game.data.map((item) => item.code);
       setCode(codes);
     }
   }, [game]);

        useEffect(() => {
          const sound = new Howl({
            src: ["/audio/GameOver.wav"],
            loop: true,
            volume: 0.5,
          });

          sound.play();

          return () => {
            sound.unload();
          };
        }, []);

     const handleRoute = () => {
      localStorage.setItem("hasPostedGameHistory", "false");
      localStorage.setItem("hasPostedGameHistorys", "false");
       const randomIndex = Math.floor(Math.random() * code.length);
       window.location.href = `/games/${code[randomIndex]}`;
     };

  return (
    <>
      <main className="w-full bg-Incorrects">
        <img
          src="../../../images/pinkMicky.png"
          alt="land"
          className=" w-14 md:w-28 lg:w-36 xl:w-36 absolute left-5 -bottom-48 md:left-10 md:bottom-24 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-20 xl:top-[800px] bounce"
        />
        <img
          src="../../../images/toto.png"
          alt="land"
          className=" w-20 md:w-28 lg:w-32 xl:w-40 absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-20 xl:top-36 animationFly"
        />
        <Lottie
          animationData={Rain}
          alt="land"
          className=" w-full md:w-full lg:w-full xl:w-full absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-40 xl:-top-10"
        />
        <img
          src="../../../images/snowTink.png"
          alt="land"
          className="right-1 bottom-28 md:right-3 md:top-24 xl:right-36 absolute md:bottom-1 w-24 md:w-36 lg:w-52 xl:w-56 xl:bottom-20 xl:top-24 bounce"
        />
        <img
          src="../../../images/frogPrincess.png"
          alt="land"
          className="left-10 -bottom-72 md:right-3 md:-bottom-44 xl:right-36 absolute w-24 md:w-36 lg:w-52 lg:top-96 xl:w-56 xl:top-[800px] xl:left-64 xl:bottom-0 bounce"
        />
        <img
          src="../../../images/snow.png"
          alt="land"
          className="right-9 -bottom-80 md:right-40 md:-bottom-56 xl:right-20 absolute w-36 md:w-36 lg:w-52 lg:top-2/3 xl:w-64 xl:bottom-36 xl:top-full bounce"
        />
        <section className="flex-wrap flex items-center justify-evenly p-32">
          <article className="w-full md:mx-auto min-h-screen grid grid-cols-1 p-4 my-10 mx-10">
            <div className="inco my-0 lg:my-20">
              <div class="line1">
                <ruby>ច</ruby>
                <ruby>ម្លើ</ruby>
                <ruby>យ</ruby>
              </div>
              <div class="line2">
                <ruby>មិ</ruby>
                <ruby>ន</ruby>
                <ruby>ត្រឹម</ruby>
                <ruby>ត្រូវ</ruby>
                <ruby>ទេ</ruby>
              </div>
            </div>
          </article>
          <article className="my-56 left-10 md:left-2/3 lg:left-2/3 mb-0 md:my-0 lg:my-0 lg:top-96 xl:mb-24 xl:my-0 xl:left-2/3 absolute">
            {" "}
            <button
              type="button"
              onClick={handleRoute}
              class="text-white xl:text-2xl bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-xl p-2.5 xl:p-4 text-center inline-flex items-center mr-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              លេងម្ដងទៀត
              <span class="sr-only">game description</span>
            </button>
          </article>
        </section>
      </main>
    </>
  );
}
