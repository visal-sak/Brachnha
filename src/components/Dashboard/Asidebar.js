"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../../store/features/user/userApiSlice";
import { logout, setCurrentUser } from "../../store/features/auth/authSlice";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import DropdownA from "./DropdownA";
import DropdownE from "./DropdownE";

export default function ASide() {
  const [loading, setLoading] = useState(false);
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery();
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);

  //set logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    // Perform any additional logout logic, such as redirecting or clearing local storage
  };

  const handleLinkClick = () => {
    setLoading(true);
    // Perform some asynchronous operation here
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a delay of 2 seconds
  };

  const pathname = usePathname();
  if (
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
    pathname === "/dashboard/superadmin/gamecompare"
  ) {
    return (
      <>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-pink-00 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <div class="sr-only">Open sidebar</div>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-fuchsia-800 border-gray-200 dark:bg-gray-900">
            <a
              href="/dashboard/superadmin"
              class="flex items-center pl-2.5 mb-5"
            >
              <img
                src="../../../images/logo.png"
                class="h-6 mr-3 sm:h-7"
                alt="brachnha logo"
              />
              <div class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white  dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                ប្រាជ្ញា
              </div>
            </a>
            <ul class="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard/superadmin"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div class="ml-3">Dashboard</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/superadmin/user"
                  class={`flex items-center text-white p-2 rounded-lg ${
                    pathname === "/dashboard/superadmin/user"
                      ? "bg-fuchsia-400 text-gray-800 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>

                  <div class="flex-1 ml-3 whitespace-nowrap">
                    អ្នកប្រើប្រាស់
                  </div>
                </Link>
              </li>

              <Dropdown />

              <li>
                <Link
                  href="/dashboard/superadmin/score"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin/score"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>

                  <div class="flex-1 ml-3 whitespace-nowrap">ពិន្ទុ</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/superadmin/class"
                  className={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin/class"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path d="M12 4a8 8 0 018 8h2a10 10 0 00-10-10V4zm0 16a8 8 0 01-8-8H2a10 10 0 0010 10v-2zm8-8a8 8 0 01-8 8v2a10 10 0 0010-10h-2zm-8-8a8 8 0 018 8h2a10 10 0 00-10-10V4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                      <path
                        fill-rule="evenodd"
                        d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                        clip-rule="evenodd"
                      />
                      <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                    </svg>
                  )}

                  <div class="flex-1 ml-3 whitespace-nowrap">ថ្នាក់</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/superadmin/admin"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin/admin"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div class="flex-1 ml-3 whitespace-nowrap">អេតមីន</div>
                </Link>
              </li>

              <div>
                {/* <li>
                  <Link
                    href="/dashboard/superadmin/setting"
                    class={`flex items-center mt-10 p-2 text-white rounded-lg ${pathname === "/dashboard/superadmin/setting"
                        ? "bg-fuchsia-200 dark:bg-fuchsia-400"
                        : "bg-transparent"
                      } hover:bg-fuchsia-200 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                      <path
                        fill-rule="evenodd"
                        d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div class="flex-1 ml-3 whitespace-nowrap">ការកំណត់</div>
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/dashboard"
                    class={`flex items-center mt-64 p-2 text-white rounded-lg ${
                      pathname === "/dashboard"
                        ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                        : "bg-transparent"
                    } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div
                      onClick={handleLogout}
                      class="flex-1 ml-3 whitespace-nowrap"
                    >
                      ចាកចេញ
                    </div>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64">
          <div>
            <div className="flex justify-end">
              {/* profile */}
              <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div class="avatar">
                  <div class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user && user.data && user.data.avatar
                          ? user.data.avatar
                          : "../../../images/profile.jpg"
                      }
                    />
                  </div>
                </div>
                <div class="pl-3">
                  <div class="text-sm font-semibold ">
                    <button>
                      {user && user.data && user.data.username
                        ? user.data.username
                        : "N/A"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* search box */}

            {/* <div>
              <form class="flex justify-between gap-8">
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium w-300 text-gray-700 bg-fuchsia-200 rounded-lg hover:bg-fuchsia-400 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-fuchsia-300 dark:hover:bg-fuchsia-300 dark:focus:ring-fuchsia-500"
                >
                  Search
                </button>
                <div class="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class=" w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </>
    );
  }

  if (
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
    pathname === "/dashboard/admin/gamecompare"
  ) {
    return (
      <>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <div class="sr-only">Open sidebar</div>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-fuchsia-800 border-gray-200 dark:bg-gray-900">
            <a href="/dashboard/admin" class="flex items-center pl-2.5 mb-5">
              <img
                src="../../../images/logo.png"
                class="h-6 mr-3 sm:h-7"
                alt="brachnha logo"
              />
              <div class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white  dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                ប្រាជ្ញា
              </div>
            </a>
            <ul class="space-y-2 font-medium">
              <li>
                <Link
                  href="dashboard/admin"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/admin"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400  hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div class="ml-3">Dashboard</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/admin/user"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin/user"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>

                  <div class="flex-1 ml-3 whitespace-nowrap">
                    អ្នកប្រើប្រាស់
                  </div>
                </Link>
              </li>

              <DropdownA />

              <li>
                <Link
                  href="/dashboard/admin/score"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin/score"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400  hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>

                  <div class="flex-1 ml-3 whitespace-nowrap">ពិន្ទុ</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/admin/class"
                  className={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/dashboard/superadmin/class"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path d="M12 4a8 8 0 018 8h2a10 10 0 00-10-10V4zm0 16a8 8 0 01-8-8H2a10 10 0 0010 10v-2zm8-8a8 8 0 01-8 8v2a10 10 0 0010-10h-2zm-8-8a8 8 0 018 8h2a10 10 0 00-10-10V4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                      <path
                        fill-rule="evenodd"
                        d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                        clip-rule="evenodd"
                      />
                      <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                    </svg>
                  )}

                  <div class="flex-1 ml-3 whitespace-nowrap">ថ្នាក់</div>
                </Link>
              </li>

              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  class="flex items-center p-2 text-white rounded-lg hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400  hover:text-gray-800"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 me-3"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                  Assets{" "}
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownHover"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Audios
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <div>
                {/* <li>
                  <Link
                    href="/dashboard/admin/setting"
                    class={`flex items-center mt-10 p-2 text-white rounded-lg ${pathname === "/dashboard/superadmin/setting"
                        ? "bg-fuchsia-200 dark:bg-fuchsia-400"
                        : "bg-transparent"
                      } hover:bg-fuchsia-200 dark:hover:bg-fuchsia-400 hover:text-gray-800 `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                      <path
                        fill-rule="evenodd"
                        d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div class="flex-1 ml-3 whitespace-nowrap">ការកំណត់</div>
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/dashboard"
                    class={`flex items-center mt-64 p-2 text-white rounded-lg ${
                      pathname === "/dashboard"
                        ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                        : "bg-transparent"
                    } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-40 hover:text-gray-800`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div
                      onClick={handleLogout}
                      class="flex-1 ml-3 whitespace-nowrap"
                    >
                      ចាកចេញ
                    </div>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64">
          <div>
            <div className="flex justify-end">
              {/* profile */}
              <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div class="avatar">
                  <div class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user && user.data && user.data.avatar
                          ? user.data.avatar
                          : "../../../images/profile.jpg"
                      }
                    />
                  </div>
                </div>
                <div class="pl-3">
                  <div class="text-sm font-semibold ">
                    {user && user.data && user.data.username
                      ? user.data.username
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (
    pathname === "/dashboard/editor" ||
    pathname === "/dashboard/editor/gamecompare" ||
    pathname === "/dashboard/editor/setting" ||
    pathname === "/dashboard/editor/multiplegame" ||
    pathname === "/dashboard/editor/dragdropgame" ||
    pathname === "/dashboard/editor/countgame" ||
    pathname === "/dashboard/editor/gameformop" ||
    pathname === "/dashboard/editor/gamecompare"
  ) {
    return (
      <>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <div class="sr-only">Open sidebar</div>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-fuchsia-800 border-gray-200 dark:bg-gray-900">
            <a href="/dashboard/editor" class="flex items-center pl-2.5 mb-5">
              <img
                src="../../../images/logo.png"
                class="h-6 mr-3 sm:h-7"
                alt="brachnha logo"
              />
              <div class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white  dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                ប្រាជ្ញា
              </div>
            </a>
            <ul class="space-y-2 font-medium">
              <li>
                <Link
                  href="dashboard/editor"
                  class={`flex items-center p-2 text-white rounded-lg ${
                    pathname === "/editor"
                      ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                      : "bg-transparent"
                  } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div class="ml-3">Dashboard</div>
                </Link>
              </li>

              <DropdownE />

              <div>
                {/* <li>
                  <Link
                    href="/dashboard/editor/setting"
                    class={`flex items-center mt-10 p-2 text-white rounded-lg ${pathname === "/dashboard/superadmin/setting"
                        ? "bg-fuchsia-200 dark:bg-fuchsia-400"
                        : "bg-transparent"
                      } hover:bg-fuchsia-200 dark:hover:bg-fuchsia-400  hover:text-gray-800`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                      <path
                        fill-rule="evenodd"
                        d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div class="flex-1 ml-3 whitespace-nowrap">ការកំណត់</div>
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/dashboard"
                    class={`flex items-center mt-64 p-2 text-white rounded-lg ${
                      pathname === "/dashboard"
                        ? "bg-fuchsia-400 dark:bg-fuchsia-400"
                        : "bg-transparent"
                    } hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 hover:text-gray-800`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div
                      onClick={handleLogout}
                      class="flex-1 ml-3 whitespace-nowrap"
                    >
                      ចាកចេញ
                    </div>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64">
          <div>
            <div className="flex justify-end">
              {/* profile */}
              <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div class="avatar">
                  <div class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user && user.data && user.data.avatar
                          ? user.data.avatar
                          : "../../../images/profile.jpg"
                      }
                    />
                  </div>
                </div>
                <div class="pl-3">
                  <div class="text-sm font-semibold ">
                    {user && user.data && user.data.username
                      ? user.data.username
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
