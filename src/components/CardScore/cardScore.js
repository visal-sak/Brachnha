"use client";
import React, { useEffect, useState } from "react";
import styles from "./cardscore.module.css";
import classNames from "classnames";
import Lottie from "lottie-react";
import potatoData from "../../app/utils/assets/bear.json";
import StarData from "../../app/utils/assets/star.json";
import { useGetRequestUserGoogleByEmailQuery, useGetUserQuery } from "src/store/features/user/userApiSlice";
import { getSession } from "next-auth/react";

export default function CardScoreComponent() {
  const score = typeof window !== "undefined" ? localStorage.getItem("sumScore") : null;
  const { data: user, isSuccess } = useGetUserQuery();


      //set session from google
      const [session, setSession] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        console.log("seessMe",session)
        setSession(session);
      } catch (error) {
        console.error(error);
      }
    };

    console.log("Fetching data...");
    fetchData();
  }, []);
     const {
      data: googleUser,
      isLoading: googleLoading,
      isSuccess: googleSuccess,
      error: errorGoogle,
    } = useGetRequestUserGoogleByEmailQuery(session?.user?.email);
    
    function getUserDisplayImage() {
      if (user && user?.data && user?.data?.avatar) {
        return user?.data?.avatar;
      } else if (googleUser && googleUser?.data && googleUser?.data?.avatar) {
        return googleUser?.data?.avatar;
      } else {
        return "../../../images/profile.jpg";
      }
    }
    
    function getUserDisplayUsername() {
      if (user && user?.data && user?.data?.username) {
        return user?.data?.username;
      } else if (googleUser && googleUser?.data && googleUser?.data?.username) {
        return googleUser?.data?.username;
      } else {
        return "Loading...";
      }
    }
    
    function getUserDisplayScore() {
      if (user && user?.data && user?.data?.score && user?.data?.score?.score) {
        return user?.data?.score?.score;
      } else if (googleUser && googleUser?.data && googleUser?.data?.score && googleUser?.data?.score?.score) {
        return googleUser?.data?.score?.score;
      } else {
        return "Loading...";
      }
    }

  const borderStyle = classNames(
    "w-56 md:w-64 lg:w-72 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-cyan-100 border-cyan-400 border-2 my-14 md:my-0 lg:my-0 xl:my-0",
    styles.Boderanimation
  );

  const TinkAim = classNames(
    " right-5 top-44 md:left-2/3 absolute md:top-48 w-20 md:w-32 lg:w-36 lg:left-2/3 xl:left-2/3 xl:top-48 xl:w-44",
    styles.animationFlyDown
  );
    const SideerManAim = classNames(
      " left-5 top-44 md:left-36 absolute md:top-48 w-20 md:w-32 lg:w-36 lg:left-62 xl:left-64 xl:top-48 xl:w-44",
      styles.animationFlyDown
    );
  return (
    <>
      <img src="../../../images/TinkerBell.png" alt="land" className={TinkAim} />
      <img src="../../../images/siderMan.png" alt="land" className={SideerManAim} />
      <section className={borderStyle}>
        <img
          src={getUserDisplayImage()}
          alt=""
          className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 mx-auto rounded-full ring-2 ring-cyan-400 dark:ring-cyan-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-cyan-700">
          <div className="my-3 space-y-1">
            <h2 className="text-lg md:text-lg lg:text-xl font-semibold">
              {getUserDisplayUsername()}
            </h2>
          </div>
          <div className="flex justify-evenly pt-2 space-x-4 align-center">
            <div className="inline">
              <h3 className="text-lg md:text-lg lg:text-lg font-semibold">{score}</h3>
              <h3 className="text-md md:text-md xl:text-lg font-light">ពិន្ទុល្អបំផុត</h3>
            </div>
            <div className="inline">
              <h3 className="text-xl font-semibold lg:text-lg">{getUserDisplayScore()}</h3>
              <h3 className="text-md md:text-md xl:text-lg font-light">ពិន្ទុសរុប</h3>
            </div>
          </div>
        </div>
      </section>
      <Lottie
        animationData={potatoData}
        className="right-5 top-80 md:left-1/3 absolute md:top-96 w-32 md:w-32 lg:w-40 lg:left-64 xl:left-1/3 xl:w-56"
      />
      <Lottie
        animationData={StarData}
        className="right-7 top-80 md:left-1/3 absolute md:top-96 w-44 md:w-32 lg:w-64 lg:left-64 xl:left-1/3 xl:w-56"
      />
    </>
  );
}
