"use client"
import { useDispatch, useSelector } from "react-redux";
import AdminDashboard from "../../../components/Dashboard/AdminDashboard";
import React, { useEffect } from "react";
import { useGetUserQuery } from "src/store/features/user/userApiSlice";
import { selectIsLoggedIn, setCurrentUser } from "src/store/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
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
  const role= user?.data?.roles

  //set session user is not logged in
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && !storedLoggedIn) {
      // Redirect to the login page if the user is not logged in
      router.push("/dashboard"); // Update to the actual login page route
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn","false");
    }
  }, [isLoggedIn]);
  if (role && role.some((r) => r?.role === "SUPER_ADMIN")) {
    router.push("/dashboard/superadmin")
  }
  else if (role && role.some((r) => r?.role === "ADMIN")) {
    return <AdminDashboard>{children}</AdminDashboard>;
  }
  else if (role && role.some((r) => r?.role === "EDITOR")) {
    router.push("/dashboard/editor")
  }
}
