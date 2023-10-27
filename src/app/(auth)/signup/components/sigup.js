"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const postUser = (user) => {

  fetch(process.env.NEXT_PUBLIC_BASE_URL+"/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((res) => {
      let message;
      let isSuccess = false;
      if (res.status) {
        message = res.message;
        isSuccess = true;
      } else {
        message = "";
        if (res.message) {
          message += res.message;
        }
        if (res.errors && Array.isArray(res.errors)) {
          res.errors.forEach((error) => {
            message += "\n" + error.message;
          });
        }
      }

      if (isSuccess) {
        toast.success(message, {
          theme: "colored",
          icon: "🚀",
          autoClose: 3000,
          position: "top-center",
        });
      } else {
        toast.error(message, {
          theme: "colored",
          icon: "❌",
          autoClose: 3000,
          position: "top-center",
        });
      }
    })
    .catch((error) => {
      toast.error(error.message, {
        theme: "colored",
        icon: "❌",
        autoClose: 1000,
        position: "top-center",
      });
    });
};

export default function SignUpForm() {
  const handleGoogle=() => {
    signIn("google")
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        console.log("sessionMe",session)
        if(session!==null){
          localStorage.setItem("hasUserNotLogging", 0);
          router.push("/")
        }
      } catch (error) {
        console.error(error);
      }
    };

    console.log("Fetching data...");
    fetchData();
  }, []);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // eye toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            postUser(values);
            resetForm({
              values: { username: "", email: "", password: "" },
            });
          }, 400);
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <div class="mx-0 my-16 lg:my-0 lg:h-screen flex flex-col justify-center items-center px-6 pt-6 pt:mt-0">
            <div className="w-full md:max-w-screen-lg">
              <Form class="bg-slate-50 shadow-0 rounded-lg lg:flex items-center justify-center sm:h-0 md:h-[680px] md:mt-0 w-full lg:max-w-screen-lg lg:h-auto 3xl:max:max-w-screen-2xl xl:p-0">
                <div class="hidden lg:block lg:w-full lg:h-auto">
                  <img
                    class="rounded-l-lg object-cover w-full h-full"
                    src="../../../images/rooms.jpg"
                    alt="login image"
                  />
                </div>
                <section class="w-full mt-11 p-6 sm:p-8 md:p-16 lg:py-0 space-y-8 lg:w-1/2">
                  <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    បង្កើតគណនី
                  </h2>
                  <div className="mt-16 grid gap-1">
                    <div>
                      <button
                        onClick={handleGoogle}
                        class="cursor-pointer p-2.5 bg-slate-100 dark:bg-black dark:text-white border w-full rounded-[16px]"
                      >
                        {" "}
                        <div class="relative flex items-center space-x-4 justify-center">
                          <img
                            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                            class="absolute left-0 w-5"
                            alt="google logo"
                          />
                          <span class="block lg:w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-teal-600">
                            Continue with Google
                          </span>
                        </div>
                      </button>
                    </div>
                    <div className="mt-4">
                      <div class="mb-2 grid grid-cols-3 items-center text-gray-500">
                        <hr class="border-gray-500" />
                        <p class="text-center text-sm">OR</p>
                        <hr class="border-gray-500" />
                      </div>
                    </div>
                  </div>{" "}
                  <div class="mt-4 mb-4 space-y-6">
                    <div>
                      <label
                        for="username"
                        class="text-sm font-medium text-gray-900 block mb-2"
                      >
                        ឈ្មោះប្រើប្រាស់
                      </label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        class={
                          touched.username && errors.username
                            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                            : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        placeholder="បញ្ចូលឈ្មោះប្រើប្រាស់របស់អ្នក"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        class="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div class="relative">
                      <label
                        for="email"
                        class="text-sm font-medium text-gray-900 block mb-2"
                      >
                        អុីម៉ែល
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        class={
                          touched.email && errors.email
                            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                            : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="name@gmail.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        class="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="relative">
                      <label
                        for="password"
                        class="text-sm font-medium text-gray-900 block mb-2"
                      >
                        ពាក្យសម្ងាត់
                      </label>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder=""
                        className={
                          touched.password && errors.password
                            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                            : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-10 right-2 text-gray-700 hover:text-gray-400 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <button
                      disabled={
                        isSubmitting || (touched.password && errors.password)
                      }
                      type="submit"
                      className={`middle none center mb-2 w-full rounded-lg py-3 px-6 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg focus:shadow-none active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
                        touched.password && errors.password
                          ? "bg-red-500 hover:bg-red-600 focus:bg-red-500"
                          : "bg-teal-500 hover:bg-teal-600 focus:bg-teal-500"
                      }`}
                      data-ripple-light="true"
                    >
                      {isSubmitting ? "កំពុងបង្កើតគណនី..." : "បង្កើតគណនី"}
                    </button>
                    <div class="text-sm font-medium text-gray-500 flex justify-start mb-5">
                      ប្រសិនបើមានaccountហើយ?{" "}
                      <Link
                        href="/login"
                        class="text-teal-700 hover:underline hover:text-yellow-500"
                      >
                        ចូលLogin
                      </Link>
                      <Link
                        href="/"
                        class="text-teal-700 hover:underline hover:text-yellow-500 ml-20"
                      >
                        ត្រឡប់ក្រោយ
                      </Link>
                    </div>
                  </div>
                </section>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
