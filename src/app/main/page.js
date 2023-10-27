"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ClassCards from "../../components/ClassCards/classCard";
import LoadingPage from "../loading/page";
import { getSession } from "next-auth/react";
import { useCreateRequestWithGoogleMutation } from "../../store/features/user/userApiSlice";
import { Howl } from "howler";

const MainPage = () => {
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(true); // new state variable

    useEffect(() => {
      const sound = new Howl({
        src: ["/audio/Song.mp3"],
        loop: true,
        volume: 0.5,
      });

      sound.play();

      return () => {
        sound.unload();
      };
    }, []);

  useEffect(() => {
    if (loadingProgress < 100) {
      const progressDuration = 9000; // 6 seconds in milliseconds
      const progressStep = progressDuration / 100;
      const intervalId = setInterval(() => {
        setLoadingProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 1 : 100
        );
      }, progressStep);

      return () => clearInterval(intervalId);
    }
  }, [loadingProgress]);

  useEffect(() => {
    setIsLoading(isDataLoading || loadingProgress < 100); // set isLoading to true while data is loading or the progress bar is showing
  }, [isDataLoading, loadingProgress]);

useEffect(() => {
    setIsLottieLoaded(true);
  }, []);

  useEffect(() => {
    if (loadingProgress < 100) {
      const progressDuration = 9000; // 6 seconds in milliseconds
      const progressStep = progressDuration / 100;
      const intervalId = setInterval(() => {
        setLoadingProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 1 : 100
        );
      }, progressStep);

      return () => clearInterval(intervalId);
    }
  }, [loadingProgress]);

  useEffect(() => {
    setIsLoading(isDataLoading || loadingProgress < 100); // set isLoading to true while data is loading or the progress bar is showing
  }, [isDataLoading, loadingProgress]);

  const [postToGoogle]=useCreateRequestWithGoogleMutation()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
    
        const values = {
          email: session?.user?.email,
          username: session?.user?.name,
          avatar: session?.user?.image,
        };
        
        const { data } = await postToGoogle(values);

        if (!session) {
          throw new Error("User session not found");
        }

        const response = await fetch({
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch grades");
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loadingProgress < 100 ? (
        <LoadingPage progress={loadingProgress} />
      ) : (
        <>
          {isLottieLoaded && (
            <>
              <Header />

              <main className="w-full md:mx-auto min-h-screen grid grid-cols-1 md-cols-span-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:grid-cols-2 justify-items-center p-4 my-auto border-0 drop-shadow-sm">
                <ClassCards />
              </main>
              <img
                src="../../../images/Kid Garden.png"
                alt="land"
                className="bg-cover bg-no-repeat w-full h-full "
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default MainPage;