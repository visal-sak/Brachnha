"use client";

import { useDispatch, useSelector } from "react-redux";
import {  useGetRequestUserGoogleByEmailQuery, useGetUserQuery } from "../../store/features/user/userApiSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";
import { logout, setCurrentUser } from "src/store/features/auth/authSlice";

export default function NavBar() {
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


  const {
    data: user,
    // isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetUserQuery();
  // const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);

  // login
  function getUserDisplayName() {
    if (user && user.data && user.data.username) {
      return user.data.username;
    } else if (googleUser && googleUser.data && googleUser.data.username) {
      return googleUser.data.username;
    } else {
      return "N/A";
    }
  }
  function getUserDisplayImage() {
    if (user && user.data && user.data.avatar) {
      return user.data.avatar;
    } else if (googleUser && googleUser.data && googleUser.data.avatar) {
      return googleUser.data.avatar;
    } else {
      return "../../../images/profile.jpg";
    }
  }

  //set logout
  const handleLogout = async () => {
    dispatch(logout());
    signOut({ callbackUrl: "/" }); // Replace '/' with the desired callback URL after logout
    // Clear any additional local storage or perform other logout logic
    router.push("/login"); // Replace '/login' with the desired redirect URL after logout
    // Perform any additional logout logic, such as redirecting or clearing local storage
  };

  const pathname = usePathname();
  const router = useRouter();

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
  if (!isSuccess && googleUser?.code == 404) {
    return (
      <>
        <nav class="bg-fuchsia-800 border-gray-200 dark:bg-gray-900 z-20 top-0 left-0 fixed w-full border-b dark:border-gray-60">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link href="/" class="flex items-center">
              <img
                src="../../../images/rabbitLogo.png"
                class="w-16 mr-3"
                alt="Brachnha Logo"
              />
            </Link>
            <div class="flex items-center md:order-2">
              <button
                onClick={() => router.push("/login")}
                type="button"
                class="text-fuchsia-800 bg-white cursor-pointer hover:ring-yellow-400 hover:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >
                ចូលលេង
              </button>
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                class="md:hidden text-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              ></button>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              </div>
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    class={
                      pathname === "/"
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                        : "block py-2 pl-3 pr-4 text-gray-100 rounded text-base hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    ទំព័រដើម
                  </Link>
                </li>
                <li>
                  <Link
                    href="/subject"
                    class={
                      pathname === "/subject"
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                        : "block py-2 pl-3 pr-4 text-gray-100 rounded text-base hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    មុខវិជ្ជា
                  </Link>
                </li>
                <li>
                  <Link
                    href="/allgame"
                    class={
                      pathname === "/allgame"
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                        : "block py-2 pl-3 pr-4 text-base text-gray-100 rounded hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    ហ្គេម
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scores"
                    class={
                      pathname === "/scores"
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                        : "block py-2 pl-3 pr-4 text-base text-gray-100 rounded hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    ពិន្ទុ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/video"
                    class={
                      pathname === "/video"
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                        : "block py-2 pl-3 pr-4 text-base text-gray-100 rounded hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    វីដេអូ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    class={
                      pathname === "/aboutus"
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                        : "block py-2 pl-3 pr-4 text-gray-100 rounded text-base hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    អំពីពួកយើង
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return (
    <nav className="bg-fuchsia-800 border-gray-200 dark:bg-gray-900 z-20 top-0 left-0 fixed w-full border-b dark:border-gray-60">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center">
          <img
            src="../../../images/rabbitLogo.png"
            className="w-16 mr-3"
            alt="Brachnha Logo"
          />
        </Link>
        <div className="flex items-center md:order-2 space-x-4 whitespace-nowrap">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10  rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={getUserDisplayImage()}
                  alt=""
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  class="justify-between"
                  onClick={() => (location.href = "/userprofile")}
                >
                  Profile
                  <span class="badge">New</span>
                </button>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          ></button>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-gray-100 rounded text-base hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                ទំព័រដើម
              </Link>
            </li>
            <li>
              <Link
                href="/subject"
                className={
                  pathname === "/subject"
                    ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-gray-100 rounded text-base hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                មុខវិជ្ជា
              </Link>
            </li>
            <li>
              <Link
                href="/allgame"
                className={
                  pathname === "/allgame"
                    ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-base text-gray-100 rounded hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                ហ្គេម
              </Link>
            </li>
            <li>
              <Link
                href="/scores"
                class={
                  pathname === "/scores"
                    ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-base text-gray-100 rounded hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                ពិន្ទុ
              </Link>
            </li>
            <li>
              <Link
                href="/video"
                class={
                  pathname === "/video"
                    ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-base text-gray-100 rounded hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                វីដេអូ
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={
                  pathname === "/aboutus"
                    ? "block py-2 pl-3 pr-4 text-white bg-yellow-300 text-base rounded md:bg-transparent md:text-yellow-300 text-body-color md:p-0 md:dark:text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-gray-100 rounded text-base hover:bg-yellow-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                អំពីពួកយើង
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}