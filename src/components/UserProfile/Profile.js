"use client"
import React,{ useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useGetRequestUserGoogleByEmailQuery, useGetUserQuery } from "../../store/features/user/userApiSlice";
import {setCurrentUser } from "../../store/features/auth/authSlice";
import styles from './profile.module.css'
import { useGetRequestGameHistoryUserPlayByIdQuery} from "../../store/features/gameHistory/requestSubjectApi";
import { getSession } from "next-auth/react";
import FormUpdateProfile from "./UpdateProfile";
import FormUpdateProfileAvatar from "./UpdateProfileAvatar";
import FormUpdateProfileCover from "./UpdateProfileCover";

export default function UserProfile() {

  const {
    data: user,
    isSuccess
  } = useGetUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);

  //set session from google
  const [session, setSession] = useState();
  useEffect(async () => {
    const response = await getSession();
    setSession(response);
  }, []);
  const {
    data:googleUser,
    isLoading: googleLoading,
    error: errorGoogle,
  } = useGetRequestUserGoogleByEmailQuery(session?.user?.email);

  const [uuid,setUuid]=useState()
  useEffect(()=>{
    const googleUuid=googleUser?.data?.uuid
    const UserUuid=user?.data?.uuid
    if(UserUuid){
      setUuid(UserUuid)
    }else if(googleUuid){
      setUuid(googleUuid)
    }

  },[user,googleUser])


  //set user play card 
  const {data:cardGamePlay,isLoading:gameLoadingCard,error:cardError}=useGetRequestGameHistoryUserPlayByIdQuery(uuid)
  if(googleUser?.code==200){
    return (
      <>
        <main class="h-screen w-scree flex flex-wrap items-center justify-center">
          <div class="container max-w-5xl bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
            <div
              class="h-2/4 sm:h-64 overflow-hidden"
              style={{
                background: user?.data?.cover
                  ? `url(${user?.data?.cover}) center`
                  : "url(https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80) center",
                backgroundSize: "cover",
              }}
            >
              <FormUpdateProfileCover uuid={user?.data?.uuid} />
            </div>
            <div class="flex justify-start px-5 -mt-12 mb-5">
              <span class="block relative h-36 w-36">
                <img
                  alt="Photo by aldi sigun on Unsplash"
                  src={
                    user && user.data && user.data.avatar
                      ? user.data.avatar
                      : "../../../images/profile.jpg"
                  }
                  className="mx-auto object-cover rounded-full bg-white p-1 ring-2 ring-fuchsia-500 dark:ring-fuchsia-800"
                  style={{ height: "6rem", width: " 6rem" }}
                />
                <FormUpdateProfileAvatar uuid={user?.data?.uuid} />
              </span>
            </div>
            <div class="">
              <div class="px-7 mb-8">
                <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">
                  {user && user.data && user.data.username
                    ? user.data.username
                    : "N/A"}
                </h2>
                <p class="text-gray-400 mt-2 dark:text-gray-400">
                  {" "}
                  @
                  {user && user.data && user.data.username
                    ? user.data.username
                    : "N/A"}
                </p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                  {user?.data?.bio ? user?.data?.bio : ""}
                </p>
                <FormUpdateProfile uuid={user?.data?.uuid} />
                <div class="justify-center px-4 py-2 cursor-pointe mx-auto mt-8 rounded-lg text-gray-700 ">
                  ប្រវិត្តនៃការលេងហ្គេមទាំងអស់
                </div>
                <main className=" md:container overflow-x-auto h-96 lg:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center p-4 my-auto border-0 drop-shadow-sm">
                  {cardGamePlay?.data?.gamesHistoryResponseDto.map(
                    (item, index) => (
                      <div
                        key={index}
                        class="bg-cyan-100 border-cyan-400 border-2 rounded-xl w-56 lg:w-2/3 lg:h-96 my-2"
                      >
                        <div class="flex items-center px-4 py-3">
                          <img
                            class="h-9 w-9 rounded-full ring-2 ring-teal-300 dark:ring-gray-500"
                            src={
                              user && user.data && user.data.avatar
                                ? user.data.avatar
                                : "../../../images/profile.jpg"
                            }
                          />
                          <div class="ml-3 mb-2">
                            <p class=" text-sm font-semibold antialiased block leading-tight">
                              {user.data.username}
                            </p>
                            <p class="text-gray-600 text-xs block">
                              {item?.name}
                            </p>
                          </div>
                        </div>
                        <img
                          src={item?.thumbnail}
                          class="h-48 w-full object-cover rounded-md"
                        />
                        <div class="font-semibold text-md mx-4 mt-5 mb-8">
                          បានពិន្ទុពីហ្គេមនេះចំនួន {item?.score} ពិន្ទុ
                        </div>
                        <div class="flex items-center justify-between mx-4 mt-3 mb-3">
                          <div class="flex gap-5">
                            <svg
                              fill="#262626"
                              height="16"
                              viewBox="0 0 48 48"
                              width="16"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                            <svg
                              fill="#262626"
                              height="16"
                              viewBox="0 0 48 48"
                              width="16"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                            <svg
                              fill="#262626"
                              height="16"
                              viewBox="0 0 48 48"
                              width="16"
                            >
                              <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                            </svg>
                          </div>
                          <div class="flex">
                            <svg
                              fill="#262626"
                              height="16"
                              viewBox="0 0 48 48"
                              width="16"
                            >
                              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </main>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main class="h-screen w-scree flex flex-wrap items-center justify-center">
        <div class="container max-w-5xl bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
          <div
            class="h-2/4 sm:h-64 overflow-hidden"
            style={{
              background: user?.data?.cover
                ? `url(${user?.data?.cover}) center`
                : "url(https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80) center",
              backgroundSize: "cover",
            }}
          >
            <FormUpdateProfileCover uuid={user?.data?.uuid} />
          </div>
          <div class="flex justify-start px-5 -mt-12 mb-5">
            <span class="block relative h-36 w-36">
              <img
                alt="Photo by aldi sigun on Unsplash"
                src={
                  user && user.data && user.data.avatar
                    ? user.data.avatar
                    : "../../../images/profile.jpg"
                }
                className="mx-auto object-cover rounded-full bg-white p-1 ring-2 ring-fuchsia-500 dark:ring-fuchsia-800"
                style={{ height: "6rem", width: " 6rem" }}
              />
              <FormUpdateProfileAvatar uuid={user?.data?.uuid} />
            </span>
          </div>
          <div class="">
            <div class="px-7 mb-8">
              <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">
                {user && user.data && user.data.username
                  ? user.data.username
                  : "N/A"}
              </h2>
              <p class="text-gray-400 mt-2 dark:text-gray-400">
                {" "}
                @
                {user && user.data && user.data.username
                  ? user.data.username
                  : "N/A"}
              </p>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                {user?.data?.bio ? user?.data?.bio : ""}
              </p>
              <FormUpdateProfile uuid={user?.data?.uuid} />
              <div class="justify-center px-4 py-2 cursor-pointe mx-auto mt-8 rounded-lg text-gray-700 ">
                ប្រវិត្តនៃការលេងហ្គេមទាំងអស់
              </div>
              <main className=" md:container overflow-x-auto h-96 lg:mx-auto max-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center p-4 my-auto border-0 drop-shadow-sm">
                {cardGamePlay?.data?.gamesHistoryResponseDto.map(
                  (item, index) => (
                    <div
                      key={index}
                      class="bg-cyan-100 border-cyan-400 border-2 rounded-xl w-56 lg:w-2/3 lg:h-96 my-2"
                    >
                      <div class="flex items-center px-4 py-3">
                        <img
                          class="h-9 w-9 rounded-full ring-2 ring-teal-300 dark:ring-gray-500"
                          src={
                            user && user.data && user.data.avatar
                              ? user.data.avatar
                              : "../../../images/profile.jpg"
                          }
                        />
                        <div class="ml-3 mb-2">
                          <p class=" text-sm font-semibold antialiased block leading-tight">
                            {user.data.username}
                          </p>
                          <p class="text-gray-600 text-xs block">
                            {item?.name}
                          </p>
                        </div>
                      </div>
                      <img
                        src={item?.thumbnail}
                        class="h-48 w-full object-cover rounded-md"
                      />
                      <div class="font-semibold text-md mx-4 mt-5 mb-8">
                        បានពិន្ទុពីហ្គេមនេះចំនួន {item?.score} ពិន្ទុ
                      </div>
                      <div class="flex items-center justify-between mx-4 mt-3 mb-3">
                        <div class="flex gap-5">
                          <svg
                            fill="#262626"
                            height="16"
                            viewBox="0 0 48 48"
                            width="16"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                          <svg
                            fill="#262626"
                            height="16"
                            viewBox="0 0 48 48"
                            width="16"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            fill="#262626"
                            height="16"
                            viewBox="0 0 48 48"
                            width="16"
                          >
                            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                          </svg>
                        </div>
                        <div class="flex">
                          <svg
                            fill="#262626"
                            height="16"
                            viewBox="0 0 48 48"
                            width="16"
                          >
                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );

}
