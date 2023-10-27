"use client"
import React, { useEffect } from 'react';
import EditorDashboard from '../../../components/Dashboard/EditorDashboard';
import { useGetUserQuery } from 'src/store/features/user/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, setCurrentUser } from 'src/store/features/auth/authSlice';
import { useRouter } from 'next/navigation';

export default function Layout({children}){
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
        router.push("/dashboard/admin")
      }
      else if (role && role.some((r) => r?.role === "EDITOR")) {
        return (
            <EditorDashboard>
                {children}
            </EditorDashboard>
        );
      }
}


