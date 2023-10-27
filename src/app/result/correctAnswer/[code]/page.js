"use client";
import React, { useEffect, useState } from "react";
import { useGetRequestGameByCodeQuery } from "src/store/features/games/requestGameCardApi";
import { useGetRequestUserGoogleByEmailQuery, useGetUserQuery } from "src/store/features/user/userApiSlice";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/features/auth/authSlice";
import { useCreateRequestGameHistoryMutation } from "src/store/features/gameHistory/requestSubjectApi";
import { getSession } from "next-auth/react";
import FireWork from "../../../utils/assets/firework.json";
import FireWorks from "../../../utils/assets/fireWorks.json";
import Lottie from "lottie-react";
import { Howl } from "howler";
import { useRouter } from "next/navigation";

export default function CorrectAnswerPage({params}) {
  

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
            src: ["/audio/Wow.mp3"],
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
            score: 2,
            won: true,
          };
  
          // You can now use the postGameHistory mutation here with 'values'
          const response = await postGameHistory(values).unwrap();
          if (response?.status === false) {
            let i = parseInt(localStorage.getItem("hasUserNotLogging") || "0", 10);

            // Increment the value.
            i++;
        
            // Store the updated value back into localStorage.
            localStorage.setItem("hasUserNotLogging", i);
        
            // Redirect to the login page if the counter exceeds 2.
            if (i > 10) {
              location.href="/login"
            }
          }else{
            let sum = parseInt(localStorage.getItem("sumScore") || "2", 10);
            sum += 2; // Increment the sum by 2
            localStorage.setItem("sumScore", sum);
            let step = parseInt(localStorage.getItem("step") || "1", 10);
            // Increment the value.
            step++;
            // Store the updated value back into localStorage.
            localStorage.setItem("step", step);
            localStorage.setItem("hasUserNotLogging", 0);
            if(step>=10){
              location.href="/result/resultScore"
            }
          }
          // Set the flag in localStorage to indicate that the mutation has been executed
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
            score: 2,
            won: true,
          };
  
          // You can now use the postGameHistory mutation here with 'values'
          const response = await postGameHistory(values).unwrap();
          if (response?.status === false) {
            let i = parseInt(localStorage.getItem("hasUserNotLogging") || "0", 10);

            // Increment the value.
            i++;
        
            // Store the updated value back into localStorage.
            localStorage.setItem("hasUserNotLogging", i);
        
            // Redirect to the login page if the counter exceeds 2.
            if (i > 10) {
              location.href="/login"
            }
          }else{
            let sum = parseInt(localStorage.getItem("sumScore") || "2", 10);
            sum += 2; // Increment the sum by 2
            localStorage.setItem("sumScore", sum);
            let step = parseInt(localStorage.getItem("step") || "1", 10);
            // Increment the value.
            step++;
            // Store the updated value back into localStorage.
            localStorage.setItem("step", step);
            localStorage.setItem("hasUserNotLogging", 0);
            if(step>=10){
              location.href="/result/resultScore"
            }
          }
          // unwrap() is used to throw an error in case of mutation failure.
  
          // Set the flag in localStorage to indicate that the mutation has been executed
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

  const handleRoute = () => {
    localStorage.setItem("hasPostedGameHistory", "false");
      localStorage.setItem("hasPostedGameHistorys", "false");
    const randomIndex = Math.floor(Math.random() * code.length);
    window.location.href = `/games/${code[randomIndex]}`;
  };


  //redirect page
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      localStorage.setItem("hasPostedGameHistory", "false");
      localStorage.setItem("hasPostedGameHistorys", "false");
    const randomIndex = Math.floor(Math.random() * code.length);
    window.location.href = `/games/${code[randomIndex]}`;
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [code]);
  return (
    <>
      <main className="w-full bg-correct">
        <img
          src="../../../images/sipderman.png"
          alt="land"
          className=" w-24 md:w-28 lg:w-36 xl:w-40 bg-fixed absolute left-5 top-[750px] md:left-20 md:bottom-24 lg:left-5 lg:-bottom-44 xl:bottom-0 xl:left-36 xl:top-[680px] bounce"
        />
        <img
          src="../../../images/iron.png"
          alt="land"
          className=" w-14 md:w-16 lg:w-24 xl:w-24 absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-20 xl:top-44 animationFlyFull"
        />
        <Lottie
          animationData={FireWork}
          alt="land"
          className=" w-56 md:w-64 lg:w-80 xl:w-full absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-40 xl:-top-10"
        />
        <Lottie
          animationData={FireWorks}
          alt="land"
          className=" w-56 md:w-64 lg:w-80 xl:w-full absolute left-5 top-36 md:left-10 md:bottom-40 lg:left-5 lg:bottom-12 xl:bottom-16 xl:left-40 xl:-top-10"
        />
        <img
          src="../../../images/barbie.png"
          alt="land"
          className="left-56 bottom-96 md:left-2/3 md:top-56 xl:right-36 lg:left-80 absolute md:bottom-1 w-28 md:w-36 lg:w-36 xl:w-44 xl:bottom-28 xl:top-44 xl:left-[1200px] animationFly"
        />
        <img
          src="../../../images/minion.png"
          alt="land"
          className="right-9 -bottom-64 md:right-40 md:-bottom-56 xl:right-96 absolute w-36 md:w-36 lg:w-44 lg:-bottom-44 xl:w-48 xl:top-[750px] xl:bottom-0 bounce"
        />
        <section className="flex-wrap flex items-center justify-evenly p-24">
          <article className="w-full md:mx-auto min-h-screen grid grid-cols-1 p-4 my-10 mx-10">
            <div className="inco my-48 lg:my-20">
              <div class="line1">
                {" "}
                <ruby>សូ</ruby>
                <ruby>ម</ruby>
                <ruby>អប</ruby>
              </div>
              <div class="line2">
                <ruby>អរ</ruby>
                <ruby>សា</ruby>
                <ruby>ទរ</ruby>
              </div>
            </div>
          </article>
          <div className="absolute bottom-2 md:right-44 lg:bottom-20 xl:right-96 xl:top-96">
            {" "}
          </div>
        </section>
      </main>
    </>
  );
}
